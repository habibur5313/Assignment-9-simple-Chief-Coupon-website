import React from 'react';
import Navbar from './Header/Navbar';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {

                    return (
                                       <div className='bg-sky-100'>
                                         <div className='container mx-auto '>
                                        <Navbar></Navbar>  
                                        <Outlet></Outlet>              
                                        </div>
                                       </div>
                    );
};

export default HomeLayout;