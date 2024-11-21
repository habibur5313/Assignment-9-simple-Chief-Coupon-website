import React from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';

const BrandsCard = ({coupon}) => {

const {_id,brand_name,isSaleOn,brand_logo,rating,description} = coupon


                    return (
                    <div   className="card card-compact bg-base-100 shadow-xl" >
                    <figure>
                    <img className='w-full h-[300px]'
                    src={brand_logo}
                    alt="Shoes" />
                    </figure>
                    <div className="card-body">
                    <div className='flex gap-5'>
                    <img className='w-14  rounded-full' src={brand_logo} alt="" />
                    <h2  className="card-title">{brand_name}</h2>
                    </div>
                    <div className='flex gap-5'>
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
                    <p>{rating}</p>
                    </div>
                    <h2 className="text-xl font-medium text-center">{brand_name}</h2>
                    <p className='text-center font-medium'>{description}</p>
                    
                   
                    <div className='flex justify-between items-center'>
                   <div>
                   {isSaleOn ? <Link to={`/getCode/${_id}`}><button className="btn btn-primary">View Coupons</button></Link>: <button className="btn btn-primary">View Coupons</button>}
                   </div>
                    <p className='text-xl font-medium flex  justify-end text-green-400 animate__animated animate__bounce animate__infinite	infinite'>{isSaleOn && 'Sale is ON'}</p>
                    </div>
                    
                    </div>
                    </div>
                    );
};

export default BrandsCard;