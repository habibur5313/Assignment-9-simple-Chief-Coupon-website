import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomeLayout from './Layout/HomeLayout';
import AuthProvider from './Context/AuthProvider';
import Login from './Pages/Login';
import AuthLayout from './Layout/AuthLayout';
import Register from './Pages/Register';
import { Toaster } from 'react-hot-toast';
import UpdateInformation from './Pages/UpdateInformation';
import Coupons from './Pages/Coupons';
import Brands from './Pages/Brands';
import CardDetails from './Pages/CardDetails';
import Profile from './Layout/Profile';
import PrivateRoute from './Private/PrivateRoute';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ResetPassword from './Pages/ResetPassword';
import Error from './Pages/Error';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: '/',
        element: <Coupons></Coupons>,
        loader: () => fetch('/coupons.json')
      },
      {
        path: '/profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
       },
      {
        path: '/brands',
        element: <Brands></Brands>,
        loader: () => fetch('/coupons.json')
      },
      {
        path: '/getCode/:id',
        element: <PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
        loader: () => fetch('/coupons.json')
      },
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
      {
        path: "/auth/updateInformation",
        element: <PrivateRoute><UpdateInformation></UpdateInformation></PrivateRoute>,
      },
    ]
  },

  {
    path: '/resetPassword',
    element: <ResetPassword></ResetPassword>
  },
  {
    path: '*',
    element: <Error></Error>
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
<AuthProvider>

<RouterProvider router={router} />
<Toaster />
</AuthProvider>
  </StrictMode>,
)
