import React from 'react';
import { FaFacebook, FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
                    return (
                                        <div className='bg-neutral text-white p-4 sm:p-7 md:p-12 lg:p-20 mt-10'>
                                         <div className='flex justify-between  lg:w-1/2 mx-auto '>
                                            <Link to={'/'}>Home</Link>                    
                                            <Link to={'/profile'}>Profile</Link>                    
                                            <Link to={'/brands'}>Brands</Link>                    
                                        </div> 
                                        <div className='flex justify-center items-center mt-4 text-2xl gap-5'>
                                        <Link to={'https://www.facebook.com/habibur5231'}><FaFacebook /></Link>
                                        <Link to={'https://x.com/MdHabibur241685'}><FaSquareXTwitter /></Link>
                                        <Link to={'https://www.linkedin.com/in/md-habibur-81802a220?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'}> <FaLinkedin /></Link>
                                        <Link to={'https://github.com/habibur5313'}><FaGithubSquare /></Link>
                                       
                                        
                                        </div>
                                        <div className=' border-t-2 mt-4 lg:w-2/3 mx-auto'>
                                          <p className='text-xl font-medium text-center mt-4'>© 2024 – 2024 Code Collecting. All rights reserved.</p>                   
                                        </div>                  
                                        </div>
                    );
};

export default Footer;