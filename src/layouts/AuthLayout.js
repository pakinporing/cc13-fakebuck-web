import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function AuthLayout() {
  return (
    <>
      <Header />
      <div className="min-vh-100 tw-pt-14">
        <Outlet />
      </div>
    </>
  );
}
