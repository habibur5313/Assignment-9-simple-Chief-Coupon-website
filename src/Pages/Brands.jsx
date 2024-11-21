import React, { useEffect, useState } from 'react';;
import { useLoaderData } from 'react-router-dom';
import BrandsCard from './BrandsCard';

const Brands = () => {
                    const loader = useLoaderData()
                    const [find,setFind] = useState(null)

const handleSearch = e => {
  e.preventDefault()
  const search = e.target.search.value;

    const finded = loader.find(dta => dta.brand_name === search)
  setFind(finded);

  
  
}
                    return (
                                        <div>
                                           <h1 className='text-3xl md:text-4xl md:font-bold text-purple-700 font-semibold  text-center  mt-10'>All Brands Is Here</h1>
                                           <form onSubmit={handleSearch} action="">                         
                    <div className='max-w-lg mx-auto flex gap-3 mt-5'>
                    <input  type="text" name="search" placeholder="search by brand name" className="input input-bordered w-10/12" required />
                      <input type="submit" className='btn w-2/12 btn-primary'  name="" id="" />
                    </div>
                                           </form>
                                        <div className='max-w-xl mx-4 md:mx-auto flex flex-col gap-6 mt-10'>
                                      {find ? <BrandsCard coupon={find}></BrandsCard> : loader.map((coupon,idx) => <BrandsCard coupon={coupon} key={idx}></BrandsCard>)}                      
                                        </div>
                                        </div>
                    );
};
export default Brands;