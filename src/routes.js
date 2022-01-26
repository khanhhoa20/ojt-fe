import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import AdminDashboardLayout from './layouts/dashboard/adminIndex';
import StudentDashboardLayout from './layouts/dashboard/studentIndex';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardApp from './pages/DashboardApp';
import Products from './pages/Products';
import Blog from './pages/Blog';
import User from './pages/User';
import NotFound from './pages/Page404';
import RequireAuth from './features/auth/RequireAuth';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/admin',
      element: <RequireAuth allowedRoles={["ad"]} />,
      children: [
        {
          path: 'dashboard',
          element: <AdminDashboardLayout />,
          children: [
            { element: <Navigate to="/admin/dashboard/app" replace /> },

            { path: 'app', element: <DashboardApp /> }
            ,

            { path: 'user', element: <User /> },


            { path: 'products', element: <Products /> }
            ,

            { path: 'blog', element: <Blog /> }



          ]
        },
      ]
    },
    {
      path: '/student',
      element: <RequireAuth allowedRoles={["st"]} />,
      children: [
        {
          path: 'dashboard',
          element: <StudentDashboardLayout />,
          children: [
            { element: <Navigate to="/student/dashboard/app" replace /> },

            { path: 'app', element: <DashboardApp /> }
            ,

            { path: 'user', element: <User /> },


            { path: 'products', element: <Products /> }
            ,

            { path: 'blog', element: <Blog /> }



          ]
        },
      ]
    },

    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/login" /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
