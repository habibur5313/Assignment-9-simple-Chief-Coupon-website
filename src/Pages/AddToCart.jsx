import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import CartCard from './CartCard';

const AddToCart = () => {
                    const {useCode} = useContext(AuthContext)
                    
                    
                    return (
                                        <div>
                                          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                                       {useCode.map(brand => <CartCard key={brand?._id} brand={brand}></CartCard>)}                     
                                        </div>
                                        </div>
                    );
};

export default AddToCart;