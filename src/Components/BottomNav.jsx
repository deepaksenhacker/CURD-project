import React from 'react';
import { Link } from 'react-router-dom';
const BottomNav = () => {
 const token = localStorage.getItem('token');
 
 
    return (
    <>
        {token?
            <div className="flex h-auto   p-3 gap-5 lg:gap-5 md:gap-5 fixed-bottom justify-center shadow-2xl overflow-x-auto w-full bg-pink-500 ">
            <Link className="flex-none text-xl text-center text-white " to={'/'} >
                <i className="fas fa-house "></i>
            </Link>
            <Link className="flex-none text-xl text-center text-white " to={'/create'} >
                <i className="fas fa-plus "></i>
            </Link>
            <Link className="flex-none text-xl text-center text-white " to={'/posts'} >
                <i className="fas fa-align-left"></i>
            </Link>
            <Link className="flex-none text-xl text-center text-white " to={'/profile'} >
                <i className="fas fa-user-graduate "></i>
            </Link>
    </div>

         :''}
</>
    );
}

export default BottomNav;
