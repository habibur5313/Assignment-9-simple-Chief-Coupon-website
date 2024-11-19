import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CardDetails = () => {

const [brand,setBrand] = useState(null)
const {id} = useParams()
const data = useLoaderData()

useEffect(() => {
                    const finded = data.find(dta => dta._id === id)
                       setBrand(finded)
},[])
console.log(brand);

                    return (
                                        <div className='min-h-[calc(100vh-430px)]'>
                                        <div className="card max-w-xl mx-auto mt-10  card-compact bg-base-100 shadow-xl">
                                        <figure>
                                        <img
                                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                        alt="Shoes" />
                                        </figure>
                                        <div className="card-body">
                                        <h2 className="card-title">Shoes!</h2>
                                        <p>If a dog chews shoes whose shoes does he choose?</p>
                                        
                                        </div>
                                        </div>
                                        </div>
                    );
};

export default CardDetails;