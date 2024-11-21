import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import DetailsCoupon from './DetailsCoupon';
import { AuthContext } from '../Context/AuthProvider';

const CardDetails = () => {
const {useCode,setUseCode} = useContext(AuthContext)
const [brand,setBrand] = useState(null)
const {id} = useParams()
const data = useLoaderData()



useEffect(() => {
                    const finded = data.find(dta => dta._id === id)
                       setBrand(finded)
},[])

                    return (
                                        
                                        <div className="card max-w-xl mx-auto mt-10  card-compact bg-base-100 shadow-xl">
                                        <figure>
                                        <img className='w-full h-[300px]'
                                        src={brand?.brand_logo} />
                                        </figure>
                                        <div className="card-body">
                                          <div className='flex flex-col md:flex-row justify-between items-center'>
                                          <div className='flex gap-5'>
                                          <img className='w-14 rounded-full' src={brand?.brand_logo} alt="" />
                                          <h2 className="card-title">{brand?.brand_name}</h2>
                                          </div>
                                          <div className='flex gap-2 md:gap-5'>
                                          <div className="rating">
                                          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                          <input
                                          type="radio"
                                          name="rating-2"
                                          className="mask mask-star-2 bg-orange-400"
                                          defaultChecked />
                                          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                          </div>
                                          <p>{brand?.rating}</p>
                                          </div>
                                          </div>
                                       <div className='grid grid-cols-1 md:grid-cols-2'>
                                          {brand?.coupons.map((coupon,idx) => <DetailsCoupon coupon={coupon} key={idx}></DetailsCoupon>)}
                                       </div>
                                       <div className='flex justify-between'>
                                          <button onClick={() => setUseCode([...useCode,brand])} className='btn btn-primary'>Add to Cart</button>
                                       <Link  to={brand?.shop_link}  className='btn btn-primary mx-5 text-center'>Use Code</Link>
                                       </div>
                                        </div>
                                        </div>
                                    
                    );
};

export default CardDetails;