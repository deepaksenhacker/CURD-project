import React from 'react';
import Post from './Post';
import MargueePost from './margueePost';

const Marquee = () => {
    return (
        <div className='mb-5 '>
        <marquee behavior="fast" direction="left">
        <MargueePost/>   
        </marquee>
        </div>
    );
}

export default Marquee;
