import React, { useContext } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Navbar = () => {

const {user,handleSignOut} = useContext(AuthContext)
const {pathname} = useLocation()


                    const links = <>
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/brands'}>Brands</NavLink>
                    <NavLink to={'/profile'}>My Profile</NavLink>
                    <NavLink to={'/about/dev'}>About dev</NavLink>
                   
                    </>
                    
                    
                                        return (
                                                            <div className="navbar pt-4 items-start bg-base-100 rounded-xl ">
                      <div className="navbar-start">
                        <div className="dropdown">
                          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                          </div>
                          <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                          </ul>
                        </div>
                        <h3 className="btn btn-ghost  pl-0 md:text-3xl sm:text-xl font-semibold  ">Code Collecting</h3>
                      </div>
                      <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-2 xl:gap-4 text-xl font-medium ">
                         {links}
                        </ul>
                      </div>
                      <div className="navbar-end">
                
                                        {user? <div className='flex flex-col gap-4'>
                                          <div className='flex justify-end items-center gap-2 sm:gap-5'>
                                        <Link to={'/profile'}><img className='w-8 bg-purple-700 rounded-full' src={user?.photoURL} alt="" /></Link>
                                          <button className='btn ' onClick={handleSignOut}>Sign Out</button>
                                        </div> 
                                        <button className='btn hidden sm:block'>{user?.email}</button></div>: pathname === '/auth/login' ? <Link className='btn mr-5' to={'/auth/register'}>Sign UP</Link> : <Link className='btn mr-5' to={'/auth/login'}>Sign In</Link>}
                    
                    
                      </div>
                    </div>
                                        );
                    };

export default Navbar;