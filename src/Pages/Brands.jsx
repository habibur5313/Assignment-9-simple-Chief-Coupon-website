import React from 'react';
import CouponsCard from './CouponsCard';
import { useLoaderData } from 'react-router-dom';
import BrandsCard from './BrandsCard';

const Brands = () => {
                    const data = useLoaderData()


                    return (
                                        <div>
                                        <div className='max-w-xl mx-4 md:mx-auto flex flex-col gap-6 mt-10'>
                                      {data.map((coupon,idx) => <BrandsCard coupon={coupon} key={idx}></BrandsCard>)}                      
                                        </div>
                                        </div>
                    );
};
export default Brands;