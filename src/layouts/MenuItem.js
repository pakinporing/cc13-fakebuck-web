import { Link } from 'react-router-dom';

export default function MenuItem({ children, active, to }) {
  return (
    <Link
      className={`nav-link tw-px-10 rounded-lg fs-4 ${
        active ? 'text-primary' : 'hover-bg-gray-200'
      }`}
      to={to}
    >
      {children}
    </Link>
  );
}
