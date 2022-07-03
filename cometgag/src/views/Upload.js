import AbstractView from "./AbstractView";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("$COMETGAG - Upload Meme");
    }

    async getHtml(){
        let isAuth = localStorage.getItem("Authenticated");
        return isAuth ? this.content() : this.redirect();
    }

    content(){
        return /*html */`
            <h1>Upload Page</h1>
        `;
    }

    redirect(){
        alert("You need to Log in first!");
        setTimeout(() => {
            location.assign("/#home");
        }, 500);
    }
}