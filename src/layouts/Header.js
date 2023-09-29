import Brand from './Brand';
import Dropdown from './Dropdown';
import Menu from './Menu';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-sm bg-white shadow-sm py-0 fixed-top">
      <div className="container-fluid mx-1">
        <div className="flex-1">
          <Brand />
        </div>
        <div className="flex-1">
          <Menu />
        </div>
        <div className="flex-1">
          <Dropdown />
        </div>
      </div>
    </nav>
  );
}
