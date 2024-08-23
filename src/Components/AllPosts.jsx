import React, { useContext, useEffect } from 'react';
import MyContext from '../Context/myContext';
import { Link } from 'react-router-dom';

const AllPosts = () => {

   const context = useContext(MyContext);
   const {getAllPosts ,AllPosts ,loader} = context;
   
   useEffect(()=>{
    getAllPosts()
   },[])


    return (
        <div className='container h-fit  flex flex-wrap gap-6 justify-center '>
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

              const {title,description,_id,image} =item;
              const keys = item.keywords
              return (
                <div className="gap-2">
                 <div key={index} className="post border-2 p-2 border-sky-400 w-full lg:w-60 md:w-52 sm:w-40 bg-blue-200 rounded-2xl ">
                  <h5 className=" text-sky-900 text-center  text-sm font-bold font-serif">{title}</h5>
                  <div className="tags flex gap-4 justify-center flex-wrap">
                  {keys.map((item,index)=>{
                          return(<>
                          
                         <h5 key={index} className=" w-fit  text-green-100 text-sm font-bold font-sans p-2 rounded-2  bg-dark">{item}</h5>

                          </>)
                         })}

                  </div>  
           <div className="w-56  h-56  overflow-hidden" >
             <img src={image}  alt="" className="border-1 shadow-md rounded-l-3xl p-2 w-full h-full object-cover  hover:scale-110 transition" />

            </div>     
                  <p className="text-wrap text-white">{description}</p> 
                 <div className="flex p-2">
                 <Link to={`/posts/view/${_id}`} className="btn btn-dark w-100 " > <i className="fab fa-github " />  View</Link>
                 <button className="btn btn-outline  text-white w-40"> <i className="fab fa-whatsapp" />  Share</button>
                 
                 </div>



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
