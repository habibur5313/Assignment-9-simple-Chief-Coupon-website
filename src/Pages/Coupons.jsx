import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CouponsCard from './CouponsCard';
import Marquee from 'react-fast-marquee';

const Coupons = () => {
const data = useLoaderData()


                    return (
                                        <div>
                                         <div className='flex flex-col justify-center items-center mt-10'>
                                         <h1 className='text-3xl font-semibold'>hello</h1>
                                         <p className='font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nihil sunt dolor hic illum, asperiores quaerat officiis temporibus magnam reprehenderit!</p>
                                         </div>
                                        <div className='max-w-xl mx-auto'>
                                        <Marquee>
                                            {data.map(coupon => <Link to={`getCode/${coupon._id}`}><img className='w-10 h-10 mr-5 rounded-full' src={coupon.brand_logo}/></Link>)}
                                        </Marquee>
                                        </div>
                                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
                                      {data.slice(0,6).map(coupon => <CouponsCard coupon={coupon} key={coupon._id}></CouponsCard>)}                      
                                        </div>
                                       <div className='text-center mt-8'>
                                       <Link to={'/brands'}><button className='btn btn-primary px-10 '>Show all</button></Link>
                                       </div>
                                        </div>
                    );
};

export default Coupons; 