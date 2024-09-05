import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../Context/myContext';
import { Link, useNavigate } from 'react-router-dom';

const AllPosts = () => {

  const navigate = useNavigate()
   const context = useContext(MyContext);
   const {getAllPosts ,AllPosts ,loader  } = context;
const [like ,setlike] = useState(0)
let [ liked ,setliked ] = useState(false) 
const [postloader  , setpostloader] =useState(false)

useEffect(()=>{
    getAllPosts()
   },[])

   const likethepost = async(postid)=>{
    setpostloader(true)
    setliked(true)
    console.log(liked)
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/posts/post/${postid}/like`,
      {

        method :'PUT',
              headers:{
                'Content-Type':'application/json',
                'auth-token':localStorage.getItem('token')
              }
      }
  
      )
      const data = await res.json();
      if(localStorage.getItem('token'))
    {
          console.log(data.post.likes)
         setlike(data.post.likes.length)
    }
      navigate('/login')
      setpostloader(false)
    } catch (error) {
      console.log(error)
    }
  }
  

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

           let {title,description,_id,image,user,likes} =item;
             let userprofile ='';
             let username;
             if(user){
               userprofile = user.profileImage;
               username = user.username 
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
                    <h5 className="font-bold ">@ {username}</h5>
              
            </div>       
           <div className="  overflow-hidden" >
           <Link to={`/posts/view/${_id}`} className="btn btn-dark w-100 " >
             <img src={postloader?`https://assets-v2.lottiefiles.com/a/daeab06c-117b-11ee-bdd9-e3e06aee90a6/qwDWqaeysR.gif`:image}  alt="" className=" w-full h-full object-cover  hover:scale-110 transition" />
             </Link>
            </div>  
            <div className="mt-2 flex gap-4">
            <button  onClick={()=>likethepost(_id)}> 
           {liked?
        
        <i className={`fas fa-heart text-3xl 
        text-red-500`}
       />

            :
            <i className={`fas fa-heart text-3xl 
            text-zinc-500`}
           />
  
        }
          
            
            </button>
            
                <i className="fas fa-comment text-3xl text-zinc-300" />
                <a href={`https://wa.me/?text=Check%20out%20this%20awesome%20content!%20Visit%20our %20site:%20https://dev1001.vercel.app/posts/view/${_id}`} target="_blank" className='font-bold'>
                <i className="fas fa-share-nodes text-3xl text-zinc-400" />
                 </a>
            </div>
                 <h5 className="font-bold m-1">{likes.length<0 ?"No likes":likes.length + like } </h5>
                  <p className="text-wrap mt-1 p-1 font-bold">{description}  <i className="fab fa-share" /></p> 
                 


              </div>
              <div className="flex flex-col gap-1">
                <h5 className="text-sm font-bold">Comments</h5>
             <div className=" justify-center">
              <textarea name="" id="" cols="" rows="3" className='w-full p-1 border' />

              
              <button className='btn hover:bg-pink-400 text-sm text-white  bg-pink-500'><i className="fas fa-comment-dots"></i> Comment</button>
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
