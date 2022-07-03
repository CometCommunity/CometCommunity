import { doc, getDoc } from "firebase/firestore";
import { db } from "../utils/features/firebase";
import AbstractView from "./AbstractView";
import $ from "jquery";
export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("$COMETGAG - Post Meme");
    this.id = localStorage.getItem("postId");
  }

  async getHtml() {
    try {
      const docRef = doc(db, "post", this.id);
      const docSnapshot = await getDoc(docRef);
      this.loadPost(docSnapshot);
      this.returnComments(docSnapshot);
    } catch (error) {
      console.log("Error getting post for current id", error);
    }
  }

  loadPost(data) {
    $("#content").html(/*html*/ `
      <div class="memeCard mt-5" data-eid="${data.id}"> 
          <div class="user-info d-flex"> 
            <img src="${
              data.data().createdByUser.photoURL
            }" height="25px" width="25px" style="border-radius: 50%;" />
            <p class="owner-info text-muted"> 
              ${data.data().createdByUser.displayName}
            </p>
          </div> 
            <h2>${data.data().title}</h2>
          <div class="memeContent">
          <div class="button-container d-flex mt-2"> 
          <button class="btn post-btn d-flex align-items-center" id="upVote" style="${
            data.data().likesID.includes(localStorage.getItem("token"))
              ? "background: rgba(222, 222, 254, 0.72);"
              : "background: #fff}"
          }">
          <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="${
            data.data().likesID.includes(localStorage.getItem("token"))
              ? "blue"
              : "#999"
          }" viewBox="0 0 24 24"><path d="M4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14z"/></svg>
                <div class="upvotes-info"> 
                  <span class="text-muted" id="likesNumber">${
                    data.data().likes
                  }</span>
                </div>
                </button>
              <button class="btn post-btn d-flex align-items-center" id="downVote" style="${
                data.data().dislikesID.includes(localStorage.getItem("token"))
                  ? "background: rgb(255, 153, 153);"
                  : "background: #fff}"
              }">
                <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="${
                  data.data().dislikesID.includes(localStorage.getItem("token"))
                    ? "red"
                    : "#999"
                }"  viewBox="0 0 24 24"><path d="M20.901 10.566A1.001 1.001 0 0 0 20 10h-4V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H4a1.001 1.001 0 0 0-.781 1.625l8 10a1 1 0 0 0 1.562 0l8-10c.24-.301.286-.712.12-1.059z"/></svg>
                <div class="downvotes-info"> 
                  <span class="text-muted">${data.data().dislikes}</span>
                </div>
                </button>
          </div>
          <div class="img-link"> 
          <img class="giftplayer mt-3" data-src src="${
            data.data().img
          }" alt="meme" />
          
          </div>
          </div>
      </div>
      <hr class="mt-2 mb-3"/>
      <section class="comments-section-container"> 
            <section class="comment-section-input"> 
                <div class="comment-input-area"> 
                    <textarea class="comment-textarea" placeholder="Write a comment..." id="userComment"></textarea>
                </div>
            </section>
            <footer class="comments-section-footer"> 
                <section class="comments-action-area"> 
                    <button class="btn text-muted" id="clearComment">Cancel</button>
                    <button class="btn btn-primary" id="postButton">Post</button>
                </section>
            </footer>
      </section>
      <section class="comments-list-container" id="commentsContainer"> 
      </section>
    `);
  }

  returnComments(data) {
    const comments = data.data().comments.map((comment) => {
      return comment;
    });
    comments.forEach((comment) => {
      $("#commentsContainer").append(/*html*/ `
    <div class="comment-card-wrapper"> 
        <div class="user-profile-avatar d-flex mt-2"> 
          <img no-referrer src="${comment.user.photoURL}" height="25px" width="25px" style="border-radius: 50%;" />
            <p class="owner-info text-muted"> 
              ${comment.user.displayName}
            </p>
        </div>
        <div class="comment-list-item" data-eid="${comment.uuid}"> 
          <div class="comment-list-item__text">
          <span id="userComment__text">${comment.comment}</span>
          </div>
          <footer class="comment-list-item__footer"> 
            
        <div class="button-container d-flex mt-2"> 
        <button class="btn post-btn d-flex align-items-center" id="upVoteComment" style="${comment.likesID.includes(localStorage.getItem("token")) ? "background: rgba(222, 222, 254, 0.72);" : "background: #fff}"}"  >
        <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="${
          comment.likesID.includes(localStorage.getItem("token"))
            ? "blue"
            : "#999"
        }" viewBox="0 0 24 24"><path d="M4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14z"/></svg>
              <div class="upvotes-info"> 
                <span class="text-muted" id="likesNumber">${
                  comment.likes
                }</span>
              </div>
              </button>
            <button class="btn post-btn d-flex align-items-center" id="downVoteComment" style="${
              comment.dislikesID.includes(localStorage.getItem("token"))
                ? "background: rgb(255, 153, 153);"
                : "background: #fff}"
            }">
              <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="${
                comment.dislikesID.includes(localStorage.getItem("token"))
                  ? "red"
                  : "#999"
              }" viewBox="0 0 24 24"><path d="M20.901 10.566A1.001 1.001 0 0 0 20 10h-4V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H4a1.001 1.001 0 0 0-.781 1.625l8 10a1 1 0 0 0 1.562 0l8-10c.24-.301.286-.712.12-1.059z"/></svg>
              <div class="downvotes-info"> 
                <span class="text-muted">
                ${
                  comment.dislikes
                }
                </span>
              </div>
              </button>
        </div>
          </footer>
        </div>
      </div>
    `);
    });
  }
}
