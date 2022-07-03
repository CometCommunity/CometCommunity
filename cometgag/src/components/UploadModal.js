class Modal extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
        <div class="modal fade" id="uploadModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button class="close btn" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i class="bi bi-x-lg"></i></span>
                        </button>
                        <h5 class="modal-title" id="exampleModalLongTitle">Upload Something Cool</h5>
                    </div>
                    <div class="modal-body">

                    <div class="container">
                        <div class="row">
                          <div class="col">
                              <form method="post" action="#" id="uploadForm">
                                  <div class="form-group files">
                                    <h4 class="mb-2">Upload a Post</h4>
                                    <input type="file" class="form-control" id="fileInput">
                                  </div>
                              </form>
                          </div>
                        </div>
                    </div> 
                        <div class="form-group mt-5"> 
                            <button class="btn btn-primary" id="submitPost">Upload</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
  }
}

customElements.define("app-upload-modal", Modal);
