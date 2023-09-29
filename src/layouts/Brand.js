import { Link } from 'react-router-dom';
import { FacebookLogo } from '../icons';

export default function Brand() {
  return (
    <div className="py-2">
      <Link className="navbar-brand" to="/">
        <FacebookLogo />
      </Link>
    </div>
  );
}
