import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

export default function RedirectIfAuthenticate({ children }) {
  const { authenticatedUser } = useAuth();
  if (authenticatedUser) {
    return <Navigate to={'/'} />;
  }
  return children;
}
