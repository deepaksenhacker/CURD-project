import React from 'react';
import Post from './Post';
import MargueePost from './margueePost';

const Marquee = () => {
    return (
        <div className=''>
        <marquee behavior="" direction="">
        <MargueePost/>   
        </marquee>
        </div>
    );
}

export default Marquee;
