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
                                                            <div className="navbar bg-base-100">
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
                                d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                          </div>
                          <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                          </ul>
                        </div>
                        <a className="btn btn-ghost text-4xl">daisyUI</a>
                      </div>
                      <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-5 text-xl font-medium ">
                         {links}
                        </ul>
                      </div>
                      <div className="navbar-end">
                
                                        {user? <div className='flex gap-4'><button className='btn' onClick={handleSignOut}>Sign Out</button> <button className='btn hidden md:block'>{user.email}</button></div>: pathname === '/auth/login' ? <Link className='btn' to={'/auth/register'}>Sign UP</Link> : <Link className='btn' to={'/auth/login'}>Sign In</Link>}
                    
                    
                      </div>
                    </div>
                                        );
                    };

export default Navbar;