export default function RegisterModal() {
  return (
    <>
      <div className="modal fade show d-block" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close invisible" />
              <h5 className="modal-title">Sign Up</h5>
              <button type="button" className="btn-close" />
            </div>
            <div className="modal-body">
              {/* Register Form */}

              <form>
                <textarea
                  className="form-control border-0 shadow-none resize-none"
                  placeholder="What's on your mind, Hsiao?"
                  rows="5"
                />
                <div className="position-relative" role="button">
                  <div className="d-flex flex-column align-items-center mt-3 py-3 rounded-2 bg-gray-100 hover-bg-gray-200">
                    <div className="text-center rounded-circle bg-gray-300 p-2 position-relative h-10 w-10 ">
                      <i className="fa-regular fa-image position-absolute top-50 left-50 translate-middle" />
                    </div>
                    <div className="mt-1">Add Photos</div>
                  </div>
                </div>
                <input type="file" className="d-none" />
                <div className="pt-3">
                  <button className="btn btn-primary w-100 fw-bold text-3.5 h-9">
                    Post
                  </button>
                </div>
              </form>

              {/* End Register Form */}
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" />
    </>
  );
}
