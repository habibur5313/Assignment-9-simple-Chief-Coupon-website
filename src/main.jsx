import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
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
        element: <Profile></Profile>
       },
      {
        path: '/brands',
        element: <Brands></Brands>,
        loader: () => fetch('/coupons.json')
      },
      {
        path: '/getCode/:id',
        element: <CardDetails></CardDetails>,
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
        element: <UpdateInformation></UpdateInformation>,
      },
    ]
  },

  {
    path: '*',
    element: 'ERROR'
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
