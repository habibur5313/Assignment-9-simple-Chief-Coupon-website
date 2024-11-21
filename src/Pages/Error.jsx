import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
   useEffect(() =>{
      document.title="Error | Coupon Chief"
     },[])
                    return (
                                        <div className='flex flex-col justify-center items-center min-h-screen'>
                                           <h1 className='text-2xl md:text-4xl lg:text-5xl font-medium md:font-semibold lg:font-bold text-[#9538E2]'>Op's 😢 Page Not Found (404)</h1>  
                                           <h4 className='text-xl font-medium md:text-2xl md:font-medium lg:text-4xl lg:font-semibold mt-3'>This page doesn’t exist.</h4> 
                                           <NavLink to={'/'} className='btn btn-accent mt-5 text-xl font-medium text-white'>back Home</NavLink>             
                                        </div>
                    );
};

export default Error;