import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Link } from 'react-router-dom';

const Profile = () => {
  useEffect(() =>{
    document.title="Profile | Coupon Chief"
   },[])
                    const {user} = useContext(AuthContext)
                    
                    return (
                                      <>
                                      {user && <h1 className='text-3xl mt-5 font-semibold text-purple-700 text-center'>Hello {user?.displayName},Welcome To your Profile</h1>}
                                      <div data-aos="fade-up">
                                        <div className=" relative max-w-lg mx-auto mt-10 border    bg-base-100 rounded-xl ">
                                        <p className='h-[200px] rounded-t-xl  bg-purple-700 flex justify-center pt-8 text-white text-2xl font-medium'>welcome to profile</p>
                                        <img className='absolute top-24 left-[37%] w-28 bg-white rounded-full px-2' src={user?.photoURL} alt="" />
                                        <div className="card-body">
                                        <h2 className="card-title">{user?.displayName}</h2>
                                        <p>{user?.email}</p>
                                        <div className='flex justify-between items-center'>
                                        <Link to={'/auth/updateInformation'} className='btn btn-primary'>Update Profile</Link>
                                        <Link to={'/resetPassword'} className='btn btn-primary'>Reset Password</Link>
                                        </div>
                                        
                                        </div>
                                        </div>
                                      </div>
                                        </>
                    );
};

export default Profile;