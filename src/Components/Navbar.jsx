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
                    <h5 className="font-mono text-3xl text-white font-extrabold"><i className="fab fa-dev"></i> </h5>
                </div>
                    <li className={`text-xl font-semibold transition-opacity text-white ${loc === '/' ? 'border-b-4 border-white':'hover:border-b-4 border-white'} `}><Link to={'/'}>Home</Link></li>
                    <li className={`text-xl font-semibold transition-opacity  text-white cursor-pointer`} onClick={logout}>Logout</li>
                    <li className="w-11 h-11 overflow-hidden rounded-full  text-white border-2 border-white shadow  bg-indigo-50 ">
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
                    <h5 className="font-mono text-3xl font-extrabold text-white"><i className="fab fa-dev" /> </h5>
                </div>
                    <li className={`text-xl font-semibold text-white transition-opacity ${loc === '/' ? 'border-b-4 border-white':'hover:border-b-4 border-white'} `}><Link to={'/'}>Home</Link></li>
                    <li className={`text-xl font-semibold  text-white transition-opacity ${loc === '/signup'?'border-b-4 border-white':'hover:border-b-4 border-white'} `}><Link to={'/signup'}>Signup</Link></li>
                    <li className={`text-xl font-semibold text-white transition-opacity ${loc === '/login'?'border-b-4 border-white':'hover:border-b-4 border-white'} `}><Link to={'/login'}>Login</Link></li>
                </ul>
                
            </div>
    } 

  </>
        );
}

export default Navbar;
