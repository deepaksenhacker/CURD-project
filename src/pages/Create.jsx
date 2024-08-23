import React, { useContext, useState } from 'react';
import Layout from '../Components/Layout';
import MyContext from '../Context/myContext';
import UploadImage from './UploadImage';
import { toast } from 'react-hot-toast';


const Create = () => {
const context = useContext(MyContext)
const {title ,description ,setkeywords ,keywords ,settitle ,loader , setloader, setdescription , sendPost,filename ,setFilename }= context; 
// API


// API

const [arraydata, setarraydata] =useState('');
const AddHandle = ()=>{
    if(keywords.length < 5){
        if(arraydata.trim()!==''){
            setkeywords([...keywords , arraydata])
            setarraydata('');
        }
        
    }
    else{
        alert('Only 5 tags allowed')
    }
}

const removeArrayItem = (index)=>{
    const newArray = [...keywords];
    newArray.splice(index,1);
    console.log(newArray)
    setkeywords(newArray);
}
const [file ,setFile] = useState();

const [msg ,setmsg]=useState(false);
const formdata = new FormData();
formdata.append('image',file);

const imageUpload = async() =>{
  try {
    setloader(true);
    const res = await fetch(`${import.meta.env.VITE_API_URL}/posts/imagedata` ,{
      method : 'POST',
      body: formdata
    });
    const data = await res.json();
    console.log(data.filedata);
    if(data.success){
        toast.success(data.success);
        
        setFilename(data.filedata);
        setloader(false)
    }else{
        toast.error(data.error)
    }

  } catch (error) {
    console.log(error);
  }
}


return (
        <Layout>
        <div className=" container h-svh  p-2 ">
                {loader?<>
                    <div className="loading  w-96 flex  h-svh backdrop-blur-sm sticky">
                        <img src="src/assets/loading.gif" alt="" className='translate-x-24 translate-y-44 w-20 h-20'/>             
                </div>
          

                </>:<>
                
                </>}

                    <h5 className="text-center text-2xl font-serif text-sky-600 font-bold">Create <span className='text-black fas fa-pen-to-square'> </span> </h5>
                    <h5 className="text-center text-xl font-bold text-sky-700">Upload Post Image </h5>    
               
           <div className="mt-2 mb-2 flex">
                <input type="file" className='mt-2 text-white' onChange={(e)=>setFile(e.target.files[0])}/>
                <button className='btn btn-dark w-fit bg-sky-800 text-white ' onClick={imageUpload}>Upload Image</button>         
            </div>
                   
          
            <div className="mb-2">
                <h5 className=" text-white">Title <span className="fas fa-file-word"></span></h5>
                <input type="text " value={title} onChange={(e)=>settitle(e.target.value)} className="w-full lg:w-72   md:w-full p-2 mt-3 rounded border-2 border-sky-700" />
            </div>
            <div className="mb-2">
                <h5 className=" text-white">Description <span className="fas fa-file-word"></span></h5>
                <textarea name="" id="" value={description} onChange={(e)=>setdescription(e.target.value)} className="w-full lg:w-72   md:w-full p-2 mt-3 rounded border-2 border-sky-700"  />
            </div>

            <h5 className=" text-white">Keywords <span className="fas fa-file-word"></span></h5>
                
            <div className="">
                <input value={arraydata} onChange={(e)=>setarraydata(e.target.value)} type="text " className="w-full lg:w-72   md:w-full p-2 mt-3 rounded border-2 border-sky-700" />
                <button onClick={AddHandle} className=' p-1 btn btn-dark bg-sky-600 -mx-8'><i className="fas fa-plus "/></button>
            </div>
           <div className="mt-2 mb-2">
            <h5 className="text-sm  text-white">Keyword</h5>
                <ul className="flex flex-wrap gap-4 ">
                    {keywords.length >0 ? 
                    keywords.map((item,index)=>(
                        <li key={index} className='bg-sky-200 p-2 rounded  font-bold'>{item}
                        <button className="btn mx-2" onClick={()=>removeArrayItem(index)}> <i className=" fas fa-delete-left" /></button>
                        </li>
                    )) 
                    : <><li className="text-white">No Keywords</li> </>}
                </ul>
            </div>   
        <div className="mt-2 mb-2">
                
                <button onClick={sendPost} className='w-full lg:w-72   md:w-full p-2 mt-3 rounded border-2 border-sky-700 text-white bg-sky-600 hover:bg-sky-500'>Upload Post</button>

        </div>
        <div className="mt-2 mb-2">
                
        
        </div>
        

        </div>
           
        </Layout>
    );
}

export default Create;
