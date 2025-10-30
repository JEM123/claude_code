import { RouteObject, Navigate } from 'react-router-dom';
import MainLayout from '@layouts/MainLayout';
import AuthLayout from '@layouts/AuthLayout';
import PrivateRoute from '@components/PrivateRoute';

// Pages
import LoginPage from '@pages/auth/LoginPage';
import RegisterPage from '@pages/auth/RegisterPage';
import DashboardPage from '@pages/DashboardPage';
import NotFoundPage from '@pages/NotFoundPage';

// Module pages (will be implemented)
// import EntitiesPage from '@pages/entities/EntitiesPage';
// import PersonsPage from '@pages/persons/PersonsPage';
// ... etc

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/dashboard" replace />,
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: '/',
    element: <PrivateRoute><MainLayout /></PrivateRoute>,
    children: [
      {
        path: 'dashboard',
        element: <DashboardPage />,
      },
      // TODO: Add module routes
      // {
      //   path: 'entities',
      //   element: <EntitiesPage />,
      // },
      // {
      //   path: 'persons',
      //   element: <PersonsPage />,
      // },
      // ... etc
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export default routes;
