import React from 'react';
import Layout from '../Components/Layout';

import Post from '../Components/Post';
import AllPosts from '../Components/AllPosts';
import Marquee from '../Components/marquee';
import StoryBar from '../Components/StoryBar';
import MargueePost from '../Components/margueePost';

const Home = () => {
    return (
         <Layout>
            <>
            <StoryBar/>     
            <Marquee/>
                 <div className="container flex ">
                 <div className="">
                        <Post/>
                </div>      
                <div className="w-96">
                     
                 <AllPosts/> 

                </div>
                 </div> 
           </>
        </Layout>
    );
}

export default Home;
