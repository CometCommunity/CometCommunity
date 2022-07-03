/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { db } from "../firebase";
import {
  addDoc,
  collection,
  query,
  orderBy,
  getDocs,
  getDoc,
  doc,
  setDoc,
} from "firebase/firestore";
export async function postMeme(data) {
  try {
    const docRef = await addDoc(collection(db, "post"), {
      img: data.img,
      title: data.title,
      description: data.description,
      likes: data.likes,
      dislikes: data.dislikes,
      comments: data.comment,
      createdByUser: data.createdByUser,
      createdOn: data.createdOn,
    });
    setTimeout(() => {
      $("#uploadModal").modal("hide");
    }, 500);
  } catch (e) {
    alert("Something went wrong: ", e);
  }
}
async function viewMeme(id) {}
async function upvoteMeme(id) {}
async function downvoteMeme(id) {}

export async function commentMeme(postId, comment, user, commentUUID) {
  const commentsRef = doc(db, "post", postId);
  const docRef = await getDoc(commentsRef);
  const comments = docRef.get("comments");
  const uuid = commentUUID;
  comments.push({
    uuid: uuid,
    user: user,
    likesID: [],
    likes: 0,
    dislikesID: [],
    dislikes: 0,
    comment: comment
  });

  await setDoc(commentsRef, {comments: comments}, {merge: true});
}
export async function trendingMeme() {
  // const postRef = await collection(db, "post");
  const postRef = collection(db, "post");
  const docRef = query(postRef, orderBy("likes", "desc"));
  const docSnapshot = await getDocs(docRef);
  return docSnapshot;
}
export async function freshMemes(){
  const postRef = collection(db, "post");
  const docRef = query(postRef, orderBy("createdOn", "desc"));
  const docSnapshot = await getDocs(docRef);

  return docSnapshot;
}


