import { useLocation } from 'react-router-dom';
import MenuItem from './MenuItem';

const menuList = [
  {
    icon: <i className="fa-solid fa-home" />,
    pathname: '/'
  },
  {
    icon: <i className="fa-solid fa-user-friends" />,
    pathname: '/friend'
  }
];

export default function Menu() {
  const location = useLocation();

  return (
    <div className="collapse navbar-collapse justify-content-center">
      <div className="navbar-nav space-x-1">
        {menuList.map(el => (
          <MenuItem
            key={el.pathname}
            to={el.pathname}
            active={location.pathname === el.pathname}
          >
            {el.icon}
          </MenuItem>
        ))}
      </div>
    </div>
  );
}
