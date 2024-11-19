import React from 'react';
import Navbar from './Header/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Header/Footer';

const HomeLayout = () => {

                    return (
                                       <div className='bg-sky-100'>
                                        
                                         <div className='container mx-auto  '>
                                        <Navbar></Navbar> 
                                        <div className='min-h-[calc(100vh-500px)]'> 
                                        <Outlet></Outlet>              
                                        </div>
                                        </div>
                                        <Footer></Footer>
                                       </div>
                    );
};

export default HomeLayout;