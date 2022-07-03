import $ from "jquery";

$(document).ready(function(){
    $("#darkModeCheckbox").on("click", function(){
        let currentTheme = $("body").attr("data-theme");
        if(currentTheme == "dark"){
            $("body").attr("data-theme", "light");
            localStorage.setItem("theme", "light");
        }
        else if(currentTheme == "light"){
            $("body").attr("data-theme", "dark");
            localStorage.setItem("theme", "dark");
        }
    });
});