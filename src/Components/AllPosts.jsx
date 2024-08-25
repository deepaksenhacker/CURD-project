import React, { useContext, useEffect } from 'react';
import MyContext from '../Context/myContext';
import { Link } from 'react-router-dom';

const AllPosts = () => {

   const context = useContext(MyContext);
   const {getAllPosts ,AllPosts ,loader } = context;
   
   useEffect(()=>{
    getAllPosts()
   },[])


    return (
        <div className='h-fit  flex flex-wrap gap-6 justify-center '>
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

              const {title,description,_id,image,user} =item;
             let userprofile ='';
              if(user){
               userprofile = user.profileImage;
              console.log(userprofile)
             }
              const keys = item.keywords
              return (
                <div className="gap-2">
                 <div key={index} className=" w-full  ">
           <div className="flex mb-2 gap-3 ">
                  <div className="w-7 h-7 rounded-full border-2 border-pink-700 overflow-hidden">
                     <img src={userprofile} alt="" className='w-full h-full object-cover' />

                  </div>
                    <h5 className="font-bold ">@</h5>
              
            </div>       
           <div className="  overflow-hidden" >
           <Link to={`/posts/view/${_id}`} className="btn btn-dark w-100 " >
             <img src={image}  alt="" className=" w-full h-full object-cover  hover:scale-110 transition" />
             </Link>
            </div>     
                  <p className="text-wrap mt-1 p-1 font-bold">{description}  <i className="fab fa-share" /></p> 
                 


              </div>
              </div>
    
              )
             }) 
            :
            <div className='h-svh'>
              
            <h2 className='text-white'><i className="fas fa-pencil"></i> No Posts Here</h2>
            
            </div>
            }
              
              
              </>
              
              }
            
      </div>
    );
}

export default AllPosts;
