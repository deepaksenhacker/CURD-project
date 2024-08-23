import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../Components/Layout';
import { toast } from 'react-hot-toast';
import ButtonBack from '../Components/ButtonBack';

const EditPost = () => {
   const params = useParams();
   const {id}= params;

   const [title,settitle] =useState('');
   const[description,setdescription] =useState('');
   const[keywords,setkeywords] = useState('');
const [oldpost , setoldpost] = useState([])
  
 

const oldPostValue = async()=>{
    try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/posts/view/post/${id}`,{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        })
        const postdata = await res.json();
        console.log(postdata.post);
        setoldpost(postdata.post)
    } catch (error) {
    console.log(error)        
    }
}


useEffect(()=>{
    oldPostValue()
},[])




const updatePost  =async()=>{
    try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/posts/update/${id}`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',  
                'auth-token':localStorage.getItem('token')
            },
            body: JSON.stringify({title,description,keywords})
        })
        const data = res.json();
        
            toast.success(data.success);
        
    } catch (error) {
        console.log(error);
        toast.error(data.error)
    }
}



    return (
        <Layout>
            <div className="w-20">
                
            <ButtonBack/>
       
            </div>
        <div className="flex flex-col container mt-3 h-svh justify-items-center">
                    <div className="mb-2">
                        <h5 className="font-bold text-xl"> <span className="fas fa-id-card-clip"></span> Title</h5>
                        <input type="text "  value={title} onChange={(e)=>settitle(e.target.value)}  placeholder={oldpost.title} className="w-full lg:w-72   md:w-full p-2 mt-3 rounded border-2 border-green-700" />
                    </div>
            
                    <div className="mb-2">
                        <h5 className="font-bold text-xl"> <span className="fas fa-user-astronaut"></span> Description</h5>
                        <textarea value={description}  onChange={(e)=>setdescription(e.target.value)} placeholder={oldpost.description}  className="w-full lg:w-72   md:w-full p-2 mt-3 rounded border-2 border-green-700" />
                    </div>
           
                    <div className="mb-2">
                                
                       <button  onClick={updatePost} className='w-full lg:w-72   md:w-full p-2 mt-3 rounded border-2 border-green-700 text-white bg-green-600 hover:bg-green-500'>Update Post</button>

                    </div>
                    
            
            </div>
        
        </Layout>
    );
}

export default EditPost;
