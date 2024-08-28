import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../Context/myContext';
import { Link } from 'react-router-dom';
import ButtonBack from './ButtonBack';
import loaderimg from '../assets/loader.gif'
const Post = () => {
  const context = useContext(MyContext);
  const {getPosts , loader , allposts,DeletePost ,AllPosts } =context;

  useEffect(()=>{
   if(localStorage.getItem('token')){
   
    getPosts();   
  }}
,[])
  

    return (
        

        <div className='container mb-28 flex flex-wrap gap-2 justify-center'>
          {/* single */}
       
                {loader?
                <>
        <div className='h-svh m-auto'>
                          
                          <h5 className="text-3xl  mt-52 text-center font-serif ">
                   
                          <img src={loaderimg} alt="" className='w-9 h-9 text-center' />
                            </h5>
                       </div>

                </> :<>
        
                {allposts.length>0?
             allposts.map((item,index)=>{

              const {title,description,_id,image,date} =item;
            
              return (
                <div key={index} className="flex gap-3   w-full  bg-slate-900 border-1 rounded-xl p-2 hover:bg-slate-700"> 
                    <div className="flex-none w-14 h-14 lg:w-28 lg:h-28 rounded-full overflow-hidden ">
                             <img src={image} alt="" className="w-full h-full object-cover" />  
                    </div>
                    <div className= "p- mt-1 lg:mt-3 flex flex-col lg:gap-2">
                      
                    <h5 className="font-bold text-sm text-white">{date}</h5>
                    <h5 className="font-bold text-white">{title}</h5>
                    <div className="flex gap-3">
                    <Link className='flex-none btn btn-dark text-white ' to={`/post/${_id}/edit`}>
                           <i className="fas fa-marker mx-1" /> 
                            Edit
                        </Link>
                        <button  onClick={()=>DeletePost(_id)} className=' text-white btn btn-dark  '>
                           <i className="fas fa-rectangle-xmark mx-1" /> 
                            Delete 
                      </button>
                    </div>


                    </div>

              </div>
     
              )
             }) 
            :
            <h2>No Posts Here</h2>
            
            }
              
              
              
                </>
                
                }
              
        </div>
    );
}

export default Post;
