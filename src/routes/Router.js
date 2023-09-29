import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ProtectedRoute from '../features/auth/ProtectedRoute';
import RedirectIfAuthenticate from '../features/auth/RedirectIfAuthenticate';
import AuthLayout from '../layouts/AuthLayout';
import FriendPage from '../pages/FriendPage';
import LoginPage from '../pages/LoginPage';
import PostPage from '../pages/PostPage';
import ProfilePage from '../pages/ProfilePage';

const router = createBrowserRouter([
  {
    path: '/login',
    element: (
      <RedirectIfAuthenticate>
        <LoginPage />
      </RedirectIfAuthenticate>
    )
  },
  {
    element: (
      <ProtectedRoute>
        <AuthLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '/',
        element: <PostPage />
      },
      {
        path: '/friend',
        element: <FriendPage />
      },
      {
        path: '/profile/:userId',
        element: <ProfilePage />
      }
    ]
  },
  {
    path: '/test',
    element: <h1>Test</h1>
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
