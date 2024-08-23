import React, { useState } from 'react';
import Layout from '../Components/Layout';

const UploadImage = () => {
   const [file, setfile] = useState(); 
 const formdata = new FormData();
 formdata.append('image',file);
 const UploadImage= async()=>{
    try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/posts/imagedata`,{
            method : 'POST',
        
            body : formdata
        })

        const data = await res.json();
        console.log(data)
       } catch (error) {
        console.log(error)    
    }

 }
 
   return (
        <Layout>
            <div className="container h-screen">
                <h5 className="mt-4 text-center font-serif text-2xl text-green-700">
                    <span className="font-bold">Upload</span> Image
                </h5>
                <div className="mb-2 mt-2 ">
                    <input type="file" className="" onChange={(e)=>setfile(e.target.files[0])}/>
                    <button type='button'
                        className="btn btn-dark bg-green-400"
                     onClick={UploadImage}>
                        Upload image
                    </button>
                    
                </div>
            </div>

        </Layout>
    );
}

export default UploadImage;
