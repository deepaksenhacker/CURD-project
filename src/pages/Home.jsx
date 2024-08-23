import React from 'react';
import Layout from '../Components/Layout';

import Post from '../Components/Post';
import AllPosts from '../Components/AllPosts';
import Marquee from '../Components/marquee';
import StoryBar from '../Components/StoryBar';

const Home = () => {
    return (
         <Layout>
            <>
            
            <Marquee/> 
            <StoryBar/> 
       
        <AllPosts/>  
           </>
        </Layout>
    );
}

export default Home;
