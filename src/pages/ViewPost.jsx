import React, { useContext, useEffect, useState } from 'react';
import Layout from '../Components/Layout';
import { useLocation, useParams } from 'react-router-dom';
import MyContext from '../Context/myContext';
import Loading from '../Components/Loading';
import { useNavigate } from 'react-router-dom';
import ButtonBack from '../Components/ButtonBack';
const ViewPost = () => { 
const [title, settitle] = useState('');
const [description, setdescription] = useState('');
const [user, setuser] = useState([]);
const [image , setimage] = useState('')
const [keywords, setkeywords] = useState('');

    const prams = useParams()
    const {id} = prams
const context = useContext(MyContext);
const {loader ,setloader}=context;
    const findPost = async()=>{
        setloader(true)
        const res = await fetch(`${import.meta.env.VITE_API_URL}/posts/view/post/${id}`,{
            method :'GET',
            headers:{
                'Content-Type':'application/json'
            }

        })
        const data =await  res.json()

        settitle(data.post.title);
        setdescription(data.post.description);    
        setkeywords(data.post.keywords)
        setuser([data.post.user])
        setimage(data.post.image)
        console.log(image)
    setloader(false);
    }

useEffect(()=>{
    findPost()
} ,[])





    return (


<Layout>
            
            {loader?<>


    <div className='h-svh m-auto'>
         
         <h5 className="text-3xl  mt-52 text-center font-serif ">Loading 
      
         <i className="fas fa-circle mx-2 text-sm animate-ping text-green-600" />
        
         <i className="fas fa-circle mx-2 text-sm animate-ping text-green-600" />
        
         </h5>
     </div>
            </>:
            <>
            <ButtonBack/>
            
            <div className="flex flex-col container-fluid  mt-4 p-3  ">
           
            <div  className="post  border-2 p-2 border-green-700   bg-green-200 rounded-e-2xl ">
                  <h5 className="mt-2 text-left  text-green-600  text-2xl font-bold font-serif">{title}</h5>
                  <h5 className="mt-3 text-left  text-green-600 text-sm font-bold font-serif">{keywords}</h5>
                     <div className="w-80">
                     <img src={`/backend/uploads/${image}`} alt="" className="border-1 shadow-md rounded-l-3xl p-2  hover:scale-110 transition" />
       
                     </div>


                  <p className="text-wrap text-white">{description}</p> 
                 <div className="flex p-2">
                <button className="btn btn-outline  text-white w-40"> <i className="fab fa-whatsapp" />  Share</button>
                 
                 </div>



              </div>
     

            </div>
            </>}
        </Layout>
    );
}

export default ViewPost;
