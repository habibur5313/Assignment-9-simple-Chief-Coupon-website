import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';



const DetailsCoupon = ({coupon}) => {

const {coupon_type,condition,expiry_date,description,coupon_code} = coupon

                    return (
                                        <div className='border rounded-xl mx-2 p-5 bg-purple-700 text-white'>
                                         <p>{coupon_type}</p>
                                         <p>{condition}</p>                   
                                         <p>{expiry_date}</p>                   
                                         <p>{description}</p>                   
                                         <CopyToClipboard text={coupon_code}>
                                     <button className='btn' onClick={() => toast.success('copied successfully')}>Copy Code</button> 
                                        </CopyToClipboard>                                    
                                        </div>
                    );
};

export default DetailsCoupon;