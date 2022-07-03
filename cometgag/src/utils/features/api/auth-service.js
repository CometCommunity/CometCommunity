/* eslint-disable no-unused-vars */
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
  FacebookAuthProvider,
} from "firebase/auth";
import { app } from "../firebase";
import $ from "jquery";
import axios from "axios";
const auth = getAuth(app);
export async function signInWithEmail(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const token = user.accessToken;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("Authenticated", true);
      localStorage.setItem("token", user.uid);
    })
    .then(async () => {
      location.reload();
    })
    .catch((error) => {
      const errorMessage = error.message;
      const errorCode = error.code;
      if (errorCode == "auth/invalid-email") {
        $("#authError").remove();
        $(/*html*/ `
        <div class="alert alert-danger mt-2" id="authError">
          <span>Please enter a valid email.</span>
        </div>`).insertBefore("#signinForm");
      }
      if (errorCode == "auth/user-not-found") {
        $("#authError").remove();
        $(/*html*/ `
        <div class="alert alert-danger mt-2" id="authError">
          <span>User not found.</span>
        </div>`).insertBefore("#signinForm");
      }
      if (errorCode == "auth/wrong-password") {
        $("#authError").remove();
        $(/*html*/ `
        <div class="alert alert-danger mt-2" id="authError">
          <span>Wrong email or password</span>
        </div>`).insertBefore("#signinForm");
      }
      if (errorCode == "auth/too-many-requests") {
        $("#authError").remove();
        $(/*html*/ `
        <div class="alert alert-danger mt-2" id="authError">
          <span>Too many attempts, please try again later.</span>
        </div>`).insertBefore("#signinForm");
      }
    });
}

export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then(async (result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("Authenticated", true);
      localStorage.setItem("token", user.uid);
    })
    .then(async () => {
      location.reload();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
}

export async function signInWithFacebook() {
  const provider = new FacebookAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("Authenticated", true);
      localStorage.setItem("token", user.uid);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = FacebookAuthProvider.credentialFromError(error);
    });
}
export async function signUpWithEmail(email, password, displayName) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      updateProfile(user, {
        displayName: displayName,
        photoURL: `https://avatars.dicebear.com/api/gridy/${email}.svg`,
      });
    })
    .then(() => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          const token = user.accessToken;
          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("Authenticated", true);
          localStorage.setItem("token", user.uid);
        })
        .then(async () => {
          location.reload();
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      $(/*html*/ `
        <div class="alert alert-danger mt-2">
          <span>${errorMessage}</span>
        </div>`).insertBefore("#signupForm");
    });
}
