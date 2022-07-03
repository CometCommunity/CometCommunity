/* eslint-disable no-undef */
import "regenerator-runtime/runtime";
import "./components/Components";
import Home from "./views/Home";
// import Post from "./views/Post";
import Fresh from "./views/Fresh";
import "./utils";  
import Upload from "./views/Upload";
import Trending from "./views/Trending";
import Post from "./views/Post";
import Account from "./views/Account";

$(document).ready(function(){
  $(document).on("click", "#getId", function(){
    const postId = $(this).parent().attr("data-eid");
    localStorage.setItem("postId", postId);
  });
  $(document).on("click", "#btnGetId", function(){
    const postId = $(this).parent().parent().attr("data-eid");
    localStorage.setItem("postId", postId);
  });
  $(document).on("click", "#getIdImg", function(){
    const postId = $(this).parent().parent().attr("data-eid");
    localStorage.setItem("postId", postId);
  });
    const navigateTo = (url) => {
      history.pushState(null, null, url);
      router();
    };
    const router = async () => {
      const routes = [
        {
          path: "#home",
          view: Home,
          needAuth: false
        },
        {
          path: "#fresh",
          view: Fresh,
          needAuth: false
        }, 
        {
          path: "#trending",
          view: Trending,
          needAuth: false
        },
        {
          path: "#upload",
          view: Upload,
          needAuth: true
        },
        {
          path: "#post",
          view: Post,
          needAuth: true
        },
        {
          path: "#account",
          view: Account,
          needAuth: true
        }
    ];

    const routeMatches = routes.map((route) => {
      return {
        route: route,
        isMatch: location.hash === route.path
      };
    });

    let match = routeMatches.find((routeMatch) => routeMatch.isMatch);
    if(!match){
      match = {
        route: routes[0],
        isMatch: true
      };
    }
    const view = new match.route.view();
    await view.getHtml();

  };

  $(window).bind("popstate", router);

  $(document).on("click",  function(e){
     if(e.target.matches("[data-link]")){
       e.preventDefault();
       navigateTo(e.target.href);
     }
  });

  router();
});


 

