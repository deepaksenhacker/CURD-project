import React, { useContext, useEffect } from 'react';
import MyContext from '../Context/myContext';
import {Link} from 'react-router-dom'
const MargueePost = () => {

    const context = useContext(MyContext);
    const {getAllPosts , loader , allposts,DeletePost ,AllPosts } =context;
  
    useEffect(()=>{
    
     
      getAllPosts();   
    }
  ,[])
    return (
        <div className='  flex w-full gap-2 justify-center'>
        {/* single */}
     
              {loader?
              <>
                  <div className='h-svh m-auto'>
                        
                        <h5 className="text-3xl  mt-52 text-center font-serif ">Loading 
                      
                        <i className="fas fa-circle mx-2 text-sm animate-ping text-green-600" />
                        
                        <i className="fas fa-circle mx-2 text-sm animate-ping text-green-600" />
                
                          </h5>
                 </div>

              </> :<>
      
              {AllPosts.length>0?
           AllPosts.map((item,index)=>{

            const {title,description,_id,image,date} =item;
          
            return (
              <div key={index} className="flex gap-3   w-full  bg-pink-500 border-1 border-pink-800 rounded-xl p-2 hover:bg-slate-700"> 
                  <div className="flex-none w-12 h-12 lg:w-20 lg:h-20 border-4 border-white  rounded-2xl overflow-hidden ">
                           <img src={image} alt="" className="w-full h-full object-cover" />  
                  </div>
                  <div className= "p- mt-1 lg:mt-2 flex flex-col lg:gap-2">
                    
                  <h5 className="font-bold text-sm text-white">{date}</h5>
                  <h5 className="font-bold text-white">{title}</h5>
                  <div className="flex gap-3">
                  <Link className='flex-none btn btn-dark hover:text-black text-pink-600 border-pink-700 bg-white  text-sm' to={`/posts/view/${_id}`}>
                         <i className="fas fa-marker mx-1" /> 
                          View
                      </Link>
 
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

export default MargueePost;
