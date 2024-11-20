import React from 'react';
import CouponsCard from './CouponsCard';
import { useLoaderData } from 'react-router-dom';
import BrandsCard from './BrandsCard';

const Brands = () => {
                    const data = useLoaderData()


                    return (
                                        <div>
                                           <h1 className='text-3xl md:text-4xl md:font-bold text-purple-700 font-semibold  text-center  mt-10'>All Brands Is Here</h1>
                                        <div className='max-w-xl mx-4 md:mx-auto flex flex-col gap-6 mt-10'>
                                      {data.map((coupon,idx) => <BrandsCard coupon={coupon} key={idx}></BrandsCard>)}                      
                                        </div>
                                        </div>
                    );
};
export default Brands;