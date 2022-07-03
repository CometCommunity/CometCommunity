/* eslint-disable no-undef */
$(document).ready(function () {
  const signUp = $("#signUpDrawer");
  const isAuth = localStorage.getItem("Authenticated");

  if(isAuth){
    $(".mini-card").remove(); 
  }
  // eslint-disable-next-line no-unused-vars
  const drawer = $(".drawer-wrapper");
  var $window = $(window);
  function resize() {
    if ($window.width() <= 800) {
      return $(drawer).addClass("drawer-active");
    }
    $(drawer).removeClass("drawer-active");
  }
  $window.resize(resize).trigger("resize");
  $(signUp).on("click", function () {
    $("#signupModal").modal("show");
  });
});
