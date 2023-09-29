import { Link } from 'react-router-dom';
import Avatar from '../components/Avatar';
import useAuth from '../hooks/useAuth';

export default function DropdownMenu({ open, onClose }) {
  const { logout, authenticatedUser } = useAuth();
  return (
    <div
      className={`dropdown-menu end-0 px-2 mt-1 border shadow-sm rounded-xl w-sm-90 ${
        open ? 'd-block' : ''
      }`}
    >
      <Link
        to={`/profile/${authenticatedUser.id}`}
        onClick={onClose}
        className="dropdown-item p-2 d-flex align-items-center gap-3 hover-bg-neutral-100 hover-rounded-lg"
      >
        <Avatar src={authenticatedUser.profileImage} size="60" />
        <div className="d-flex flex-column">
          <span className="text-black fw-bold">
            {authenticatedUser.firstName} {authenticatedUser.lastName}
          </span>
          <small className="text-muted">See your profile</small>
        </div>
      </Link>
      <hr className="dropdown-divider mx-2" />
      <button
        className="dropdown-item p-2 d-flex align-items-center gap-3 hover-bg-neutral-100 hover-rounded-lg"
        onClick={logout}
      >
        <i className="fa-solid fa-sign-out-alt rounded-circle p-2 text-black text-5 bg-gray-300" />
        <small className="text-black fw-bold">Log Out</small>
      </button>
    </div>
  );
}
