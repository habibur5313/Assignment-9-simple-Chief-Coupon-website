import React from 'react';
import Navbar from './Header/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Header/Footer';

const HomeLayout = () => {

                    return (
                                       <div className='bg-sky-100'>
                                         <div className='container mx-auto '>
                                        <Navbar></Navbar>  
                                        <Outlet></Outlet>              
                                        </div>
                                        <Footer></Footer>
                                       </div>
                    );
};

export default HomeLayout;