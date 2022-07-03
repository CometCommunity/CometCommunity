import AbstractView from "./AbstractView";
import $ from "jquery";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/features/firebase";
export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("$COMETGAG - User Info");
        this.id = localStorage.getItem("token");
        localStorage.removeItem("postId");
    }

    async getHtml(){
        if(!this.id){
            location.hash = "#home";
        }
        else {
            $("#content").empty();
            const user = JSON.parse(localStorage.getItem("user"));
            $("#content").html(/*html*/`
                <section style="display: flex; justify-content: center; align-items:center; flex-direction: column;"> 
                    <h1>Hello, ${user.displayName}</h1>
                    <img src="${user.photoURL}" height="100px" width="100px" style="border-radius: 50%;">
                    <h1>Your Posts</h1>
                </section>
            `);
            try{
                const querySnapshot = await getDocs(collection(db, "post"));
                let postMap = [];
                querySnapshot.forEach((post) => postMap.push(post));
                const userPosts = postMap.filter((post) => post.data().createdByUser.uid == this.id);
                userPosts.forEach((item) => this.loadPosts(item));
            }catch(error){
                console.log("Something went wrong getting user's post:", error);
            }

        }
    }
}