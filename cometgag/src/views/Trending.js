import AbstractView from "./AbstractView";
import $ from "jquery";
import { trendingMeme } from "../utils/features/api/app-service";
export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("$COMETGAG - Trending Meme");
        localStorage.removeItem("postId");
    }

    async getHtml(){
        $("#content").empty();
            try{
                await trendingMeme().then((res) => {
                    res.forEach((post) => {
                        this.loadPosts(post);
                    });
                });
            }
            catch(error){
                console.log("Error getting most liked memes:", error);
            }
    }
    calculateTimeDiff(date) {
        const today = new Date();
        var diff = date - today;
        return Math.round(((diff % 86400000) % 3600000) / 60000);
    }
    
         
}