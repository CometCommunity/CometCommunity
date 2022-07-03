import AbstractView from "./AbstractView";
import $ from "jquery";
import { freshMemes } from "../utils/features/api/app-service";
export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("$COMETGAG - Fresh Posts");
        localStorage.removeItem("postId");
    }

    async getHtml(){
        $("#content").empty();
        try{
            await freshMemes().then((res) => {
                res.forEach((post) => {
                    this.loadPosts(post);
                });
            });
        }catch(error){
            console.log("Error getting fresh memes:", error);
        }
    }
    calculateTimeDiff(date) {
        const today = new Date();
        var diff = date - today;
        return Math.round(((diff % 86400000) % 3600000) / 60000);
    }
}