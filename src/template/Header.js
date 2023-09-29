import { FacebookLogo } from './icons';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-sm bg-white shadow-sm py-0 fixed-top">
      <div className="container-fluid mx-1">
        <div className="flex-1">
          {/* Facebook Logo */}

          <div className="py-2">
            <a className="navbar-brand" href="/">
              <FacebookLogo />
            </a>
          </div>

          {/* End Facebook Logo */}
        </div>
        <div className="flex-1">
          {/* Menu */}

          <div className="collapse navbar-collapse justify-content-center">
            <div className="navbar-nav space-x-1">
              <a
                href="/"
                className="nav-link tw-px-10 rounded-lg fs-4 text-primary"
              >
                <i className="fa-solid fa-home" />
              </a>
              <a
                href="/friend"
                className="nav-link tw-px-10 rounded-lg fs-4 hover-bg-gray-200"
              >
                <i className="fa-solid fa-user-group" />
              </a>
            </div>
          </div>

          {/* End Menu */}
        </div>
        <div className="flex-1">
          {/* Profile Dropdown */}

          {/* End Profile Dropdown */}
        </div>
      </div>
    </nav>
  );
}
