import { doc, getDoc, updateDoc } from "firebase/firestore";
import $ from "jquery";
import { commentMeme } from "../features/api/app-service";
import { db } from "../features/firebase";
$(document).ready(function () {
  /*** Start: Post Comment***/
  $(document).on("click", "#postButton", async function () {
    const postId = localStorage.getItem("postId");
    if (localStorage.getItem("Authenticated")) {
      const userComment = $("#userComment").val();
      const user = JSON.parse(localStorage.getItem("user"));
      const uuid = generateUUID();
      await commentMeme(postId, userComment, user, uuid);
      appendComment(user, userComment, uuid);
    } else {
      alert("You need to be logged in first");
    }
  });
  /*** End: Post Comment***/

  /*** Start: Clear Comment Text Field ***/
  $(document).on("click", "#clearComment", function () {
    $("#userComment").val("");
  });
  /*** End: Clear Comment Text Field ***/

  /*** Start: Upvote Comment***/
  $(document).on("click", "#upVoteComment", async function () {
    const isAuth = localStorage.getItem("Authenticated");
    if (isAuth) {
      const currentUserId = localStorage.getItem("token");
      const uuid = $(this).parent().parent().parent().attr("data-eid");
      const downvoteButton = $(this).parent().children("#downVoteComment");
      const button = $(this);
      const btnSVG = $(this).children("svg");
      let btnValue = $(this).children(".upvotes-info").children("#likesNumber");
      const elementId = localStorage.getItem("postId");
      const docRef = doc(db, "post", elementId);
      const commentsRef = await getDoc(docRef);
      let comments = commentsRef.get("comments");
      let updateComment = comments.filter(
        (commentId) => uuid == commentId.uuid
      );
      let isLiked = false;
      let isDisliked = false;

      /***Check if user already liked the comment***/
      if (updateComment[0].likesID.length > 0) {
        updateComment[0].likesID.forEach((id) => {
          if (id == currentUserId) isLiked = true;
        });
      }
      /***Check if user already disliked the comment***/
      if(updateComment[0].dislikesID.length > 0){
        updateComment[0].dislikesID.forEach((id) => {
          if(id == currentUserId) isDisliked = true;
        });
      }

      if (isLiked) {
        updateComment[0].likesID = updateComment[0].likesID.filter((id) => {
          return id != currentUserId;
        });
        updateComment[0].likes = updateComment[0].likesID.length;
        comments = comments.filter((comment) => comment.uuid != uuid);
        comments.push(updateComment[0]);
        let likesID = updateComment[0].likesID;
        await updateDoc(docRef, { comments: comments }, { merge: true });
        $(button).css("background", "#fff");
        $(btnSVG).attr("fill", "#999");
        $(btnValue).text(likesID.length);
      } else {
        if (isDisliked) {
          updateComment[0].dislikesID = updateComment[0].dislikesID.filter(
            (id) => {
              return id != currentUserId;
            }
          );
          updateComment[0].dislikes = updateComment[0].dislikesID.length;
          comments = comments.filter((comment) => comment.uuid != uuid);
          comments.push(updateComment[0]);
          let dislikesID = updateComment[0].dislikes;
          await updateDoc(docRef, { comments: comments }, { merge: true });
          $(downvoteButton).css("background", "#fff");
          $(downvoteButton).children("svg").attr("fill", "#999");
          $(downvoteButton).children(".downvotes-info").text(dislikesID);
          updateComment[0].likesID.push(currentUserId);
          updateComment[0].likes = updateComment[0].likesID.length;
          comments = comments.filter((comment) => comment.uuid != uuid);
          comments.push(updateComment[0]);
          let likesID = updateComment[0].likesID;
          await updateDoc(docRef, {comments: comments}, {merge: true});
          $(button).css("background", "rgba(222, 222, 254, 0.72)");
          $(btnSVG).attr("fill", "blue");
          $(btnValue).text(likesID.length);
        }
        else{
          updateComment[0].likesID.push(currentUserId);
          updateComment[0].likes = updateComment[0].likesID.length;
          comments = comments.filter((comment) => comment.uuid != uuid);
          comments.push(updateComment[0]);
          let likesID = updateComment[0].likesID;
          await updateDoc(docRef, {comments: comments}, {merge: true});
          $(button).css("background", "rgba(222, 222, 254, 0.72)");
          $(btnSVG).attr("fill", "blue");
          $(btnValue).text(likesID.length);
        }
      }
    } else {
      alert("You need to log in first");
    }
  });
  /*** End: Upvote Comment***/

  /*** Start: Downvotevote Comment***/
  $(document).on("click", "#downVoteComment", async function () {
    const isAuth = localStorage.getItem("Authenticated");
    if (isAuth) {
      const currentUserId = localStorage.getItem("token");
      const uuid = $(this).parent().parent().parent().attr("data-eid");
      const button = $(this);
      const upvoteButton = $(this).parent().children("#upVoteComment");
      const btnSVG = $(this).children("svg");
      let btnValue = $(this).children(".downvotes-info");
      const elementId = localStorage.getItem("postId");

      const docRef = doc(db, "post", elementId);
      const commentsRef = await getDoc(docRef);
      let comments = commentsRef.get("comments");
      let updateComment = comments.filter(
        (commentId) => uuid == commentId.uuid
      );
      let isLiked = false;
      let isDisliked = false;

      /***Check if user already disliked the comment***/
      if (updateComment[0].dislikesID.length > 0) {
        updateComment[0].dislikesID.forEach((id) => {
          if (id == currentUserId) isDisliked = true;
        });
      }
      /***Check if user already liked the comment***/
      if(updateComment[0].likesID.length > 0){
        updateComment[0].likesID.forEach((id) => {
          if(id == currentUserId) isLiked = true;
        });
      }

      if(isLiked){
        updateComment[0].likesID = updateComment[0].likesID.filter((id) => {
          return id != currentUserId;
        });
        updateComment[0].likes = updateComment[0].likesID.length;
        updateComment[0].dislikesID.push(currentUserId);
        updateComment[0].dislikes = updateComment[0].dislikesID.length;
        comments = comments.filter((comment) => comment.uuid != uuid);
        comments.push(updateComment[0]);
        let dislikesID = updateComment[0].dislikesID;
        let likesID = updateComment[0].likesID;
        await updateDoc(docRef, {comments: comments}, {merge: true});
        $(upvoteButton).css("background", "#fff");
        $(upvoteButton).children("svg").attr("fill", "#999");
        $(upvoteButton).children(".upvotes-info").children("#likesNumber").text(likesID.length);
        $(button).css("background", "rgb(255, 153, 153)");
        $(btnSVG).attr("fill", "red");
        $(btnValue).text(dislikesID.length);
      }
      else {
        if (isDisliked) {
          updateComment[0].dislikesID = updateComment[0].dislikesID.filter(
            (id) => {
              return id != currentUserId;
            }
          );
          updateComment[0].dislikes = updateComment[0].dislikesID.length;
          comments = comments.filter((comment) => comment.uuid != uuid);
          comments.push(updateComment[0]);
          let dislikesID = updateComment[0].dislikesID;
          await updateDoc(docRef, { comments: comments }, { merge: true });
          $(button).css("background", "#fff");
          $(btnSVG).attr("fill", "#999");
          $(btnValue).text(dislikesID.length);
        }
        else{
          updateComment[0].dislikesID.push(currentUserId);
          updateComment[0].dislikes = updateComment[0].dislikesID.length;
          comments = comments.filter((comment) => comment.uuid != uuid);
          comments.push(updateComment[0]);
          let dislikesID = updateComment[0].dislikesID;
          await updateDoc(docRef, {comments: comments}, {merge: true});
          $(button).css("background", "rgb(255, 153, 153)");
          $(btnSVG).attr("fill", "red");
          $(btnValue).text(dislikesID.length);
        }

      }
    } else {
      alert("You need to log in first.");
    }
  });
  /*** End: Downvotevote Comment***/

  /*** Start: Append Comment card after commenting the post***/
  function appendComment(user, comment, uuid) {
    $("#commentsContainer").append(/*html*/ `
        <div class="comment-card-wrapper mt-2"> 
          <div class="user-profile-avatar d-flex mt-2"> 
            <img no-referrer src="${user.photoURL}" height="25px" width="25px" style="border-radius: 50%;" />
              <p class="owner-info text-muted"> 
                ${user.displayName}
              </p>
          </div>
          <div class="comment-list-item" data-eid="${uuid}"> 
            <div class="comment-list-item__text">${comment}</div>
            <footer class="comment-list-item__footer"> 
              
          <div class="button-container d-flex mt-2"> 
          <button class="btn post-btn d-flex align-items-center" id="upVoteComment" >
          <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="#999" viewBox="0 0 24 24"><path d="M4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14z"/></svg>
                <div class="upvotes-info"> 
                  <span class="text-muted" id="likesNumber">0</span>
                </div>
                </button>
              <button class="btn post-btn d-flex align-items-center" id="downVoteComment">
                <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="#999" viewBox="0 0 24 24"><path d="M20.901 10.566A1.001 1.001 0 0 0 20 10h-4V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H4a1.001 1.001 0 0 0-.781 1.625l8 10a1 1 0 0 0 1.562 0l8-10c.24-.301.286-.712.12-1.059z"/></svg>
                <div class="downvotes-info"> 
                  <span class="text-muted" id="dislikesNumber">0</span>
                </div>
                </button>
          </div>
            </footer>
          </div>
        </div>
        `);
  }
  /*** End: Append Comment card after commenting the post***/

  /*** Start: Generate UUID when commeting post***/
  function generateUUID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }
  /*** End: Generate UUID when commeting post***/
});
