import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const UpdateInformation = () => {
                    useEffect(() =>{
                                        document.title="Update Profile | Coupon Chief"
                                       },[])
                    const {Update_information} = useContext(AuthContext)
                    const navigate = useNavigate()

const handleUpdateProfile = e =>  {
e.preventDefault()
const name = e.target.name.value;
const photo = e.target.photoUrl.value;

Update_information(name,photo)
toast.success('Profile Updated Successfully')
navigate('/profile')
e.target.name.value = ''
e.target.photoUrl.value = ''
}
                    return (
                                       
                                         <div className='mt-10 md:mt-20 lg:mt-32 flex justify-center items-center'>
                                         <div className="card bg-base-100 p-5 w-full max-w-lg shrink-0 rounded-none border">
                                                            <h1 className='text-2xl font-semibold text-center'>Update Information!</h1>
                                        <form onSubmit={handleUpdateProfile} className="card-body px-2 md:px-5 lg:px-14">
                                        <div className="form-control">
                                        <label className="label">
                                        <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                                        </div>

                                        <div className="form-control">
                                        <label className="label">
                                        <span className="label-text">Photo Url</span>
                                        </label>
                                        <input type="text" name="photoUrl" placeholder="photoUrl" className="input input-bordered" />
                                        </div>
                                        <button  className=' btn btn-primary mt-4'>Update</button>
                                        </form>
                                        </div>
                                        </div>
                                      
                    );
};

export default UpdateInformation;