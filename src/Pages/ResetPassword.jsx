import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import toast from 'react-hot-toast';

const ResetPassword = () => {
const {loginEmail,resetPassword,handleSignOut} = useContext(AuthContext)

const handleResetPassword = () => {
                    resetPassword(loginEmail)
                    .then(res => {
                    window.location.href = 'https://mail.google.com/mail/u/0/#inbox'; 
                    toast.success('Password reset email link created!')
                    handleSignOut()
                    }
                    )
                    .catch(err => toast.error(err))
                    }

                    return (
                                        <div className='border max-w-lg mx-auto bg-purple-600  min-h-[400px]'>
                                         <h1 className='text-3xl font-semibold mt-16 text-center'>Reset Your Password</h1> 
                                         <div className="form-control px-10 mt-5">
                                        <input value={loginEmail}  type="email"  className="input input-bordered " required />    
                                        </div>  
                                        <div className=' flex justify-center items-center mt-5'>
                                        <button onClick={handleResetPassword} className='btn btn-primary'>Reset</button>                    
                                        </div>          
                                        </div>
                    );
};

export default ResetPassword;