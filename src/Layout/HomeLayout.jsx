import React, { useEffect } from 'react';
import Navbar from './Header/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Header/Footer';
import Banner from './Header/Banner';
import BrandsOnSell from '../Pages/BrandsOnSell';


const HomeLayout = () => {
  useEffect(() =>{
    document.title="Home | Coupon Chief"
   },[])
  const {pathname} = useLocation()
                    return (
                                       <div className='bg-sky-100'>
                                        
                                         <div className='container mx-auto  '>
                                        <Navbar></Navbar> 
                   
                                        {pathname === '/' && <Banner></Banner>}
                                        <div className='min-h-[calc(100vh-500px)]'> 
                                        <Outlet></Outlet>              
                                        </div>
                                        {pathname === '/' && <BrandsOnSell></BrandsOnSell>}
                                        
                                        </div>
                                        <Footer></Footer>
                                       </div>
                    );
};

export default HomeLayout;