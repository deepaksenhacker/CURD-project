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
        <div className='container  flex  gap-2 justify-center'>
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
              <div key={index} className="flex gap-3   w-full  bg-slate-900 border-1 rounded-xl p-2 hover:bg-slate-700"> 
                  <div className="flex-none w-14 h-14 lg:w-28 lg:h-28 rounded-full overflow-hidden ">
                           <img src={image} alt="" className="w-full h-full object-cover" />  
                  </div>
                  <div className= "p- mt-1 lg:mt-3 flex flex-col lg:gap-2">
                    
                  <h5 className="font-bold text-sm text-white">{date}</h5>
                  <h5 className="font-bold text-white">Post name</h5>
                  <div className="flex gap-3">
                  <Link className='flex-none btn btn-dark text-white ' to={`/posts/view/${_id}`}>
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
