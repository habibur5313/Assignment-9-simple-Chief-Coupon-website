import React from 'react';
import Navbar from './Header/Navbar';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
                    return (
                                        <div className='container mx-auto'>
                                                            <Navbar></Navbar>
                                                            <Outlet></Outlet>
                                                            
                                        </div>
                    );
};

export default AuthLayout;