class Modal extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button class="close btn" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true"><i class="bi bi-x-lg"></i></span>
            </button>
            <h5 class="modal-title" id="exampleModalLongTitle">Login</h5>
          </div>
          <div class="modal-body">
            <div class="splitter"> 
            </div>
            <form class="mt-3" id="signinForm"> 
              <div class="form-group"> 
                <input type="text" placeholder="Username or email address" class="form-control" id="signEmail"/>
                <div class="alert alert-danger mt-2" id="error-email"> 
                  <span>Enter Valid Email</span>
                </div>
              </div>
              <div class="form-group mt-2"> 
                <input type="password" placeholder="Password" class="form-control" id="signPassword"/>
              </div>
              <div class="form-group mt-2"> 
                <button class="btn __btn-primary w-100" type="submit">Log in</button>
              </div>
            </form>
            <div class="form-group mt-2"> 
              <button class="btn w-100" type="submit">Forgot password?</button>
            </div>
          </div>
        </div>
      </div>
    </div>
        `;
  }
}

customElements.define("app-modal", Modal);
