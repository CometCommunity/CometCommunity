class Navs extends HTMLElement{
    connectedCallback(){
        this.innerHTML = /*html*/`
        <nav class="fixed-top mini-nav">
            <div class="navmenu-container"> 
                <a data-link href="/#home" class="nav-btn selected">Hot</a>
                <a data-link href="/#trending" class="nav-btn">Trending</a>
                <a data-link href="/#fresh" class="nav-btn">Fresh</a>
            </div> 
        </nav>
        `;
    }
}

customElements.define("app-navs", Navs);