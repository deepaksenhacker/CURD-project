import React from 'react';
import { Link } from 'react-router-dom';
const BottomNav = () => {
 const token = localStorage.getItem('token');
 
 
    return (
    <>
        {token?
            <div className="flex h-auto   p-2 gap-3 lg:gap-9 md:gap-5 fixed-bottom justify-center shadow-2xl overflow-x-auto w-full bg-dark ">
            <Link className="flex-none text-xl text-center text-white " to={'/'} >
                <i className="fas fa-house "></i>
                <h5 className="text-white">Home</h5>
            </Link>
            <Link className="flex-none text-xl text-center text-white " to={'/create'} >
                <i className="fas fa-plus "></i>
                <h5 className="text-white">Post</h5>
            </Link>
            <Link className="flex-none text-xl text-center text-white " to={'/posts'} >
                <i className="fas fa-align-left"></i>
                <h5 className="text-white">Allposts</h5>
            </Link>
            <Link className="flex-none text-xl text-center text-white " to={'/profile'} >
                <i className="fas fa-user-graduate "></i>
                <h5 className="text-white">Profile</h5>
            </Link>
    </div>

         :''}
</>
    );
}

export default BottomNav;
