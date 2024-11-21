import React from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';

const CouponsCard = ({coupon}) => {

const {_id,brand_name,brand_logo,coupons,category} = coupon


                    return (
                                        <div className="card card-compact bg-base-100 shadow-xl">
                                        <figure>
                                        <img className='w-full h-[200px]'
                                        src={brand_logo}
                                        alt="Shoes" />
                                        </figure>
                                        <div className="card-body">
                                        <div className='flex gap-5'>
                                        <img className='w-14  rounded-full' src={brand_logo} alt="" />
                                        <h2 className="card-title">{brand_name}</h2>
                                        </div>
                                        <p className='text-2xl font-medium'>Total Coupons:     {coupons.length}</p>
                                        <p className='text-2xl font-medium'>Category: {category}</p>
                                        <div className='flex justify-between items-center'>
                                        <div>
                                       <Link to={`/getCode/${_id}`}><button className="btn btn-primary">View Coupons</button></Link>
                                        </div>
                                    
                                          </div>
                                      
                                        </div>
                                        </div>
                    );
};

export default CouponsCard;