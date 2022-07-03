class Modal extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
      <div class="modal fade modal2" id="signupModal" tabindex="-1" role="dialog" aria-labelledby="signupModal" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header d-block">
              <button class="close btn" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"><i class="bi bi-x-lg"></i></span>
              </button>
              <div class="modal-header-content w-100"> 
              <img src="https://github.com/Koutelier/CometCommunity/blob/main/TheCometTokenWebsite/public/chou.png?raw=true" width="80" height="85" viewBox="0 0 40 45" role="presentation"></img>
                <h5>$COMETGAG is the HQ of meme</h5>
              </div>
              <p class="modal-header-footer mt-5"> 
                By continuing, you agree to $COMETGAG's Terms of Service and acknowledge that you've read our Privacy Policy.
              </p>
            </div>
            <div class="modal-body">
              <button class="btn w-100 social-btn" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Use email</button>
              <button class="btn w-100" data-bs-target="#exampleModalCenter" data-bs-toggle="modal" data-bs-dismiss="modal">Already a member? Log in</button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <button class="close btn" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"><i class="bi bi-x-lg"></i></span>
              </button>
              <h5 class="modal-title" id="exampleModalLongTitle">Sign up</h5>
            </div>
            <div class="modal-body" id="signUpBody">
            <div class="alert alert-danger mt-2" id="danger-credit">
              <span>Please enter valid credentials.</span>
            </div>
              <form id="signupForm"> 
                <div class="form-group"> 
                  <input type="text" placeholder="Username" class="form-control" id="fullName"/>
                  <div class="alert alert-danger mt-2" id="danger-username">
                    <span>Username must be at least 3 characters long.</span>
                  </div>
                </div>
                <div class="form-group mt-2"> 
                  <input type="text" placeholder="Email address" class="form-control" id="username"/>
                  <div class="alert alert-danger mt-2" id="danger-email">
                    <span>Enter Valid Email</span>
                  </div>
                </div>
                <div class="form-group mt-2"> 
                  <input type="password" placeholder="Password" class="form-control" id="password"/>
                  <div class="alert alert-danger mt-2" id="danger-password">
                    <span>Password Length must be at least 6 characters long.</span>
                  </div>
                </div>
                <div class="form-group mt-2"> 
                  <button class="btn __btn-primary w-100" type="submit">Sign up</button>
                </div>
              </form>
              <div class="form-group mt-2"> 
                <button class="btn w-100" data-bs-target="#exampleModalCenter" data-bs-toggle="modal" data-bs-dismiss="modal">Already a member? Log in</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("app-signup-modal", Modal);
