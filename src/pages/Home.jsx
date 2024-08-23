import React from 'react';
import Layout from '../Components/Layout';
import StoryBar from '../Components/StoryBar';
import Post from '../Components/Post';
import AllPosts from '../Components/AllPosts';
import Marquee from '../Components/marquee';


const Home = () => {
    return (
         <Layout>
            <>
            
        <StoryBar/> 
            <Marquee/> 
        <AllPosts/>  
           </>
        </Layout>
    );
}

export default Home;
