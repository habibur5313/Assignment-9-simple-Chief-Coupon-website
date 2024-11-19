import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CouponsCard from './CouponsCard';

const Coupons = () => {
const data = useLoaderData()


                    return (
                                        <div>
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