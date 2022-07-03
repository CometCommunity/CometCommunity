import AbstractView from "./AbstractView";
import { collection, getDocs } from "firebase/firestore";
import $ from "jquery";
import { db } from "../utils/features/firebase";
export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("$COMETGAG - Home");
        localStorage.removeItem("postId");
    }
    async getHtml(){
        $("#content").empty();
            try {
                const querySnapshot = await getDocs(collection(db, "post"));
                querySnapshot.forEach((doc) => {
                    this.loadPosts(doc);
                });
              } catch (error) {
                console.log("Error getting cached document: ", error);
              }
    }
    calculateTimeDiff(date) {
        const today = new Date();
        const diff = Math.abs(date - today) / (60*60*1000);
        return Math.floor((diff/1000)/60);
    }

}