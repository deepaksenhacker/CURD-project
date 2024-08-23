import React, { useContext, useEffect, useState } from 'react';
import {Link ,Navigate,useLocation, useNavigate} from 'react-router-dom'
import MyContext from '../Context/myContext';
const Navbar = () => {
const l=useLocation();
const loc = l.pathname;

const context = useContext(MyContext)
const { user ,setuser}  =context
const navigate = useNavigate();
const token  = localStorage.getItem('token');




const logout=()=>{
    localStorage.clear('token');
  
    navigate('/login')
}



const profilepic = user? user.profileImage :'https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg'



    return (
<>
        {token?<>
                <div className='sticky-top w-full  h-auto flex drop-shadow-lg justify-around p-3 backdrop-blur-sm'>
                <ul className="flex gap-4 p-2  " >
                <div className=" ">
                    <h5 className="font-mono text-3xl text-pink-600 font-extrabold"><i className="fab fa-dev"></i> </h5>
                </div>
                    <li className={`text-xl font-semibold transition-opacity text-pink-600 ${loc === '/' ? 'border-b-4 border-pink-600':'hover:border-b-4 border-pink-600'} `}><Link to={'/'}>Home</Link></li>
                    <li className={`text-xl font-semibold transition-opacity  text-pink-600 cursor-pointer`} onClick={logout}>Logout</li>
                    <li className="w-11 h-11 overflow-hidden rounded-full  text-pink-600 border-2 border-pink-600 shadow  bg-indigo-50 ">
                    <Link to={'/profile'}>
                            <img src={profilepic} alt="" className='w-full h-full  object-cover'/>
                    </Link>
                    </li>

                </ul>
                
            </div>
    
                </> :
                <div className='sticky-top w-full  h-auto flex drop-shadow-lg justify-around p-3 backdrop-blur-sm'>
                <ul className="flex gap-4 p-2  " >
                <div className=" ">
                    <h5 className="font-mono text-3xl font-extrabold text-pink-600"><i className="fab fa-dev" /> </h5>
                </div>
                    <li className={`text-xl font-semibold text-pink-600 transition-opacity ${loc === '/' ? 'border-b-4 border-pink-600':'hover:border-b-4 border-pink-600'} `}><Link to={'/'}>Home</Link></li>
                    <li className={`text-xl font-semibold  text-pink-600 transition-opacity ${loc === '/signup'?'border-b-4 border-pink-600':'hover:border-b-4 border-pink-600'} `}><Link to={'/signup'}>Signup</Link></li>
                    <li className={`text-xl font-semibold text-pink-600 transition-opacity ${loc === '/login'?'border-b-4 border-pink-600':'hover:border-b-4 border-pink-600'} `}><Link to={'/login'}>Login</Link></li>
                </ul>
                
            </div>
    } 

  </>
        );
}

export default Navbar;
