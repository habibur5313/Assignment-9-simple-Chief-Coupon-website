import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CouponsCard from './CouponsCard';
import Marquee from 'react-fast-marquee';
import toast from 'react-hot-toast';

const Coupons = () => {
const data = useLoaderData()


                    return (
                                        <div>
                                    <div className='max-w-xl mx-auto flex mt-10 md:-mt-20'>
                                      <button className='btn btn-primary mr-4 text-xl font-medium'>Brands</button>
                                        <Marquee pauseOnHover>
                                            {data.map(coupon => <Link key={coupon._id}  to={coupon.isSaleOn ? `/getCode/${coupon._id}`: ''}><img onClick={!coupon.isSaleOn ? () => toast.error('Sale is Off') : ''} className='w-10 h-10 mr-5 rounded-full' src={coupon.brand_logo}/></Link>)}
                                        </Marquee>
                                        </div>
                                        <h1 className='text-3xl md:text-4xl md:font-bold text-purple-700 font-semibold text-center  mt-10'>Top Brands Is Here</h1>
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