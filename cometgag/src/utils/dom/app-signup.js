/* eslint-disable no-useless-escape */
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { signUpWithEmail } from "../features/api/auth-service";
import $ from "jquery";
$(document).ready(function () {
  const form = $("#signupForm");
  const fullName = $("#fullName");
  const email = $("#username");
  const password = $("#password");
  const dangerEmail = $("#danger-email");
  const dangerPassword = $("#danger-password");
  const dangerUsername = $("#danger-username");
  const dangerCredit = $("#danger-credit");
  let isUsernameVaild, isEmailValid, isPasswordValid = false;
  $(dangerEmail).hide();
  $(dangerPassword).hide();
  $(dangerUsername).hide();
  $(dangerCredit).hide();
  $(fullName).on("change", () => {
    validateUsername();
  });

  $(email).on("change", () => {
    validateEmail();
  });

  $(password).on("input", () => {
    validatePassword();
  });

  function validateUsername() {
    let userInput = $(fullName).val();
    if(userInput.length <= 2){
      $(dangerUsername).show();
      isUsernameVaild = true;
    }
    else {
      $(dangerUsername).hide();
      isUsernameVaild = true;
    }
  }

  function validatePassword() {
    let userInput = $(password).val();
    if(userInput.length <= 5){
      $(dangerPassword).show();
      isPasswordValid = false;
    }
    else {
      $(dangerPassword).hide();
      isPasswordValid = true;
    }
  }
  function validateEmail() {
    let userInput = $(email).val();
    let regex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!userInput.match(regex)) {
      $(dangerEmail).show();
      isEmailValid = false;
    } else {
      $(dangerEmail).hide();
      isEmailValid = true;
    }
  }
  $(form).on("submit", (e) => {
    e.preventDefault();
    if(isUsernameVaild && isEmailValid && isPasswordValid){
      $(dangerCredit).hide();
      signUpWithEmail($(email).val(), $(password).val(), $(fullName).val());
    }
    else {
      $(dangerCredit).show();
    }
  });
});
