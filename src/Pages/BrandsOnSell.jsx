import React, { useEffect, useState } from 'react';
import BrandONSell from './BrandONSell';

const BrandsOnSell = () => {

const [brands,setBrands] = useState([])
useEffect(() => {
                    fetch('/coupons.json')
                    .then(res => res.json())
                    .then(data => setBrands(data))
},[])
                    return (
                                        <div>
                                          <h1 className='text-4xl font-semibold text-center text-purple-700 my-10'>Brands ON Sell</h1>
                                         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                                         {brands.map(brand =>  <BrandONSell brand={brand}></BrandONSell>)}
                                          </div>        
                                        </div>
                    );
};

export default BrandsOnSell;