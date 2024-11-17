import React from 'react';
import Navbar from './Header/Navbar';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {

                    return (
                                        <div className='container mx-auto'>
                                        <Navbar></Navbar>  
                                        <Outlet></Outlet>              
                                        </div>
                    );
};

export default HomeLayout;