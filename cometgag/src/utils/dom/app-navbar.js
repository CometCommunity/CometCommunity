/* eslint-disable no-undef */
$(document).ready(function () {
  const signIn = $("#signIn");
  const signUp = $("#signUp");
  const burger = $(".burger");
  const drawer = $(".drawer-wrapper");
  const isAuth = localStorage.getItem("Authenticated");

  if (isAuth) {
    $("#isNotAuth").remove();
    $("#accountState").text("Account");
    $("#accountState").attr("data-link");
    $("#accountState").attr("href", "/#account");
    $("#navItemDropdown").append(/*html*/ `
      <li id="logoutBtn"><a class="dropdown-item" href="#">Logout</a></li>
    `);
    $("#navbarMenu").append(/*html*/ `
      <button class="btn __btn-primary" id="uploadBtn">+ Upload</button>
    `);
  } else {
    // alert("User is not logged in");
  }
  $(document).on("click", "#uploadBtn", function () {
    // alert("Upload modal");
    $("#uploadModal").modal("show");
    $("#fileInput").show();
    $(".files").removeClass("remove-after");
    $("#postGroup").remove();
  });
  $(document).on("click", "#logoutBtn", function () {
    localStorage.removeItem("Authenticated");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    location.reload();
  });
  $(signIn).on("click", function () {
    $("#exampleModalCenter").modal("show");
  });
  $(signUp).on("click", function () {
    $("#signupModal").modal("show");
  });

  $(burger).on("click", function () {
    if ($(drawer).hasClass("drawer-active")) {
      $(drawer).removeClass("drawer-active");
    } else {
      $(drawer).addClass("drawer-active");
    }
  });
});
