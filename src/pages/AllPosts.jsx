import React from 'react';
import Layout from '../Components/Layout';
import Post from '../Components/Post';
import Loading from '../Components/Loading';

const AllPosts = () => {
    return (
        <Layout>
        
            <div className="container-fluid  h-svh mt-4">
                <h5 className="text-center  font-bold text-green-600 text-2xl  font-serif mb-2"><span className="text-black">Your</span> Posts</h5>    
        <div className="flex-wrap p-1  lg:p-4 w-full h-svh box overflow-x">
            <Post/>
        </div>
            </div>            
        </Layout>
    );
}

export default AllPosts;
