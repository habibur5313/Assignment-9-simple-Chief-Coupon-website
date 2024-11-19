import React from 'react';
import CouponsCard from './CouponsCard';
import { useLoaderData } from 'react-router-dom';

const Brands = () => {
                    const data = useLoaderData()


                    return (
                                        <div>
                                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
                                      {data.map((coupon,idx) => <CouponsCard coupon={coupon} key={idx}></CouponsCard>)}                      
                                        </div>
                                        </div>
                    );
};
export default Brands;