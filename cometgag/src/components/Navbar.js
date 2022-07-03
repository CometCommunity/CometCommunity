// eslint-disable-next-line no-unused-vars
class Navbar extends HTMLElement {
    connectedCallback() {
        // eslint-disable-next-line spaced-comment
        this.innerHTML = /*html*/ `
            <header class="__navbar-wrapper">
                <div class="__navbar-container">
                    <nav class="__navbar-menu">
                        <div class="btn burger">
                            <i class="bi bi-list"></i>
                        </div>
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="logo" data-link href="/#home">$COMETGAG</a>
                            </li>
                            <li>
                                 <a href="/#trending">Trending</a>
                            </li>
                            <li>
                                <a href="https://thecomettoken.com/">COMET website</a>
                            </li>
                            <li>
                                <a href="https://thecomettoken.com/buy">COMET nfts</a>
                            </li>
                            <li>
                                <a href="https://app.ergodex.io/swap">Ergodex</a>
                            </li>
                            <li>
                                <a href="https://ergoplatform.org/en/">Ergo</a>
                            </li>
                        </ul>
                        <div class="d-flex __right-menu">
                            <div class="__btn-group">
                                <ul class="__navbar-menu-right" id="navbarMenu">
                                    <li class="nav-item dropdown">
                                        <a class="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                             <i class="bi bi-search"></i>
                                        </a>
                                        <ul class="dropdown-menu search-dropdown" aria-labelledby="navbarDropdown">
                                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                                        </ul>
                                    </li>
                                    <li class="nav-item d-flex" id="isNotAuth">
                                            <button class="btn __btn-secondary" id="signIn">Login</button>
                                            <button class="btn __btn-primary" id="signUp">Sign up</button> 
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        ${localStorage.getItem("user") ? `<img class="profile-picture-link" src="${JSON.parse(localStorage.getItem("user")).photoURL}"/>` : "<i class=\"bi bi-chevron-down\"></i>" }
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown" id="navItemDropdown">
                                            <li><a class="dropdown-item" href="#" id="accountState">$COMETGAG</a></li>
                                            <li><button class="dropdown-item" id="darkModeBtn">Dark Mode &nbsp;<input class="form-check-input" type="checkbox" value="" id="darkModeCheckbox"></button></li>
                                           </li>
                                        </ul> 
                                    </li>  
                                </ul>
                             </div>
                        </div>
                    </nav>
                </div>
            </header>
        `;
    }
}

customElements.define("app-navbar", Navbar);
