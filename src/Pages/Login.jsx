import { FaEye, FaEyeSlash } from 'react-icons/fa';
import React, { useContext,  useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {
                    const {user,setUser,SignInEmailAndPassword,SignInGoogle,setLoginEmail} = useContext(AuthContext)
                    const navigate = useNavigate()
                    const [showPassword,setShowPassword] = useState(false)
                   const location = useLocation();
                
                 
 const handleLogin = e => {
                      e.preventDefault()
                      const email = e.target.email.value;
                      const password = e.target.password.value;
                      SignInEmailAndPassword(email,password)
                      .then(res => {
                        setUser(res.user)
                        toast.success('Login Successfully')
                         {location.state ? navigate(location.state) : navigate('/')}
                      })
                      .catch(err => {
                        toast.error(err.message)
                      })
                     
                    }
const handleGoogleLogin = () => {
                    SignInGoogle()
                    .then(res => {
                      setUser(res.user)
                      navigate('/')
                    })
                    .catch(err => {
                      toast.error(err.message)
                    })
 }

 const handleChange = (e) => {
  e.preventDefault()
  setLoginEmail(e.target.value);
  
 }

 const handleForget = () => {
 
  navigate('/resetPassword')

};


return (
                    <div className='mt-10 md:mt-20 lg:mt-32 flex justify-center items-center'>
                    <div className="card bg-base-100 p-5 w-full max-w-lg shrink-0 rounded-none border">
                                        <h1 className='text-2xl font-semibold text-center'>Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body pb-4 px-2 md:px-5 lg:px-14">
                    <div className="form-control">
                    <label className="label">
                    <span className="label-text">Email</span>
                    </label>
                    <input onChange={handleChange}  type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                                        <label className="input input-bordered flex items-center gap-2">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              viewBox="0 0 16 16"
                                              fill="currentColor"
                                              className="h-4 w-4 opacity-70">
                                              <path
                                                fill-rule="evenodd"
                                                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                                clip-rule="evenodd" />
                                            </svg>
                                            <input type={!showPassword?'password':'text'} name='password' className="grow"  />
                                           <p className='flex justify-end' onClick={() => setShowPassword(!showPassword)}> {showPassword ? <FaEyeSlash></FaEyeSlash>: <FaEye></FaEye>}</p>
                                          </label>
            
                    <label className="label">
                    <Link onClick={handleForget}  className="underline mt-5 text-xl font-medium">Forgot password?</Link>
                    </label>
                    </div>
                    <div  className="form-control  mt-2">
                    <button className="btn btn-primary">Login</button>
                    </div>
                    </form>
                    <p className="text-center mb-4">Dont’t Have An Account ? <Link className='text-red-800 text-xl font-medium ' to={'/auth/register'}>Register</Link></p>
                    <button onClick={handleGoogleLogin} className='btn btn-accent text-xl font-medium text-purple-500'>Google Login</button>
                       </div>                   
                                                           </div>
                                       );
                   };
export default Login;