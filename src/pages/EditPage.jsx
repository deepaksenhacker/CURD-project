import React, { useContext, useEffect, useState } from 'react';
import Layout from '../Components/Layout';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import ButtonBack from '../Components/ButtonBack';
import MyContext from '../Context/myContext';
import loaderimg from '../assets/loader.gif'
const EditPage = () => {
 const context = useContext(MyContext)  
 const {user ,loader ,setloader} = context

 

console.log(user);
const navigate = useNavigate();


const[profileimage ,setprofileimage]  = useState();

const profilepic = user? user.profileImage :'https://st.depositphotos.com/2101611/3925/v/450/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg'


const [image ,setimage] = useState();
const formdata = new FormData();

formdata.append('profileImage',image);

   
   const [username,setUsername] =useState('');
   const[email,setEmail] =useState('');
   const[bio,setBio] = useState('');


const upadateUser  =async()=>{
    try {
      setloader(true)
        const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/user/update`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json',
                'auth-token':localStorage.getItem('token')
            },
            body: JSON.stringify({username,email,bio})
        })
        const data = await res.json();
        
            toast.success(data.success);
            setloader(false)
            navigate('/profile')
        

    } catch (error) {
        console.log(error);
    }
}


const uploadimage= async()=>{
 
  try {
 setloader(true)
    const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/profileimage`,{
            method: 'POST',
            headers:{
              'auth-token':localStorage.getItem('token')
            },
            body : formdata
        })

        const data = await res.json();
        
        console.log(data.filedata);
        if(data.success){
          toast.success(data.success);
        }
        console.log(image)
        setloader(false)

    } catch (error) {
        console.log(error)
    }
} 




   const handleupload =(e)=>{
    const file = e.target.files[0]
        if(file){
            const reader = new FileReader();
            setimage(file)
            reader.onloadend=()=>{
                setprofileimage(reader.result);
            }
            reader.readAsDataURL(file)
        }
}
    return (
        <Layout>
          {loader?<>
            <div className='container h-svh m-auto'>
                          
                          <h5 className="text-3xl  mt-52 text-center font-serif ">
                   
                          <img src={loaderimg} alt="" className='w-9 h-9 text-center' />
                            </h5>
                       </div>
          

          
          </>:<>
          <div className="container-fluid flex-row  lg:flex  sm:flex-col  min[640px]:flex-col"> 
           {/* first */}
           <div className="flex flex-col items-center container mt-5">
      <div className="relative">
      <div className="w-32 h-32 lg:w-64 lg:h-64  border-4 border-white rounded-full overflow-hidden">
      <img
          src= {profileimage || user.profileImage }
          className="w-full h-full object-cover"
        />

      </div>
        <input
          type="file"
          className="absolute inset-0 opacity-0 cursor-pointer"
            onChange={handleupload}
        />
        <button
          onClick={() => document.querySelector('input[type="file"]').click()}
          className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-2 m-2 shadow-md hover:bg-blue-600 focus:outline-none"
        >

          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12l5 5L20 7"
            />
          </svg>
        </button>
    
      </div>
      <button className="mt-2 btn btn-dark bg-white-300 text-white" onClick={uploadimage}>Update Profile Image</button>
    </div>
           {/* second */}
            <div className="flex flex-col container mt-3 h-svh justify-items-center">
                <ButtonBack/>



                    <div className="mb-2">
                        <h5 className="font-bold text-xl text-white"> <span className="fas fa-id-card-clip"></span> Username</h5>
                        <input type="text "  value={username} onChange={(e)=>setUsername(e.target.value)}  placeholder={user.username} className="w-full lg:w-72   md:w-full p-2 mt-3 rounded border-2 border-white-700" />
                    </div>
            
                    <div className="mb-2">
                        <h5 className="font-bold text-xl text-white"> <span className="fas fa-user-astronaut"></span> Bio</h5>
                        <textarea value={bio}  onChange={(e)=>setBio(e.target.value)} placeholder={user.bio}  className="w-full lg:w-72   md:w-full p-2 mt-3 rounded border-2 border-white-700" />
                    </div>
           
                    <div className="mb-2">
                        <h5 className="font-bold text-xl text-white"> <span className="fas fa-id-card-clip"></span> Email</h5>
                        <input value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder={user.email}  type="email" className="w-full lg:w-72   md:w-full p-2 mt-3 rounded border-2 border-white-700" />
                    </div>
                    <div className="mb-2">
                                
                <button  onClick={upadateUser} className='w-full lg:w-72   md:w-full p-2 mt-3 rounded border-2 border-white-700 text-white bg-white-600 hover:bg-white-500'>Update Profile</button>

                    </div>
                    
            
            </div>
        </div>
          
          
          </>}
        </Layout>
    );
}

export default EditPage;
