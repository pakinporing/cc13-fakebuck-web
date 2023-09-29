export default function ProfileDropdown() {
  return (
    <div className="d-flex justify-content-end">
      <div className="dropdown">
        <div>
          <img
            src="https://images.pexels.com/photos/5193860/pexels-photo-5193860.png"
            className="rounded-circle cursor-pointer"
            width="40"
            height="40"
            alt="user"
          />
        </div>

        <div className="dropdown-menu end-0 px-2 mt-1 border shadow-sm rounded-xl w-sm-90 d-block">
          <a
            href="/profile"
            className="dropdown-item p-2 d-flex align-items-center gap-3 hover-bg-neutral-100 hover-rounded-lg"
          >
            <img
              src="https://images.pexels.com/photos/5193860/pexels-photo-5193860.png"
              className="rounded-circle"
              width="60"
              height="60"
              alt="user"
            />
            <div className="d-flex flex-column">
              <span className="text-black fw-bold">Hsiao Li</span>
              <small className="text-muted">See your profile</small>
            </div>
          </a>
          <hr className="dropdown-divider mx-2" />
          <button className="dropdown-item p-2 d-flex align-items-center gap-3 hover-bg-neutral-100 hover-rounded-lg">
            <i className="fa-solid fa-sign-out-alt rounded-circle p-2 text-black text-5 bg-gray-300" />
            <small className="text-black fw-bold">Log Out</small>
          </button>
        </div>
      </div>
    </div>
  );
}
