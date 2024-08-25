import React, { useState } from 'react';
import Layout from '../Components/Layout';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { ToastBar, toast } from 'react-hot-toast';
const Signup = () => {
   const [hideshow , setHideShow] = useState(true);

    const [username, setusername] = useState('');
   
    const [email, setemail] = useState('');
   
    const [password, setpassword] = useState('');
   
const navigate = useNavigate();

    const SignupHandle = async()=>{
        //send
        const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/signup` ,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body : JSON.stringify({username,email,password})
        });
        //check response
        const signupData = await res.json();
        if(signupData.error){
            toast.error(signupData.error);
        }
        else{
            toast.success(signupData.success);
            navigate('/login');
        }
    setusername('');
    setemail('');
    setpassword('');    
}
   
    return (
        <Layout>
            <div className="container  lg:w-50 md:w-96 sm:w-full">
              <h5 className="mt-6  font-serif text-3xl text-black text-center font-semibold">
                    Sign Up <span className='text-pink-600  '>Create Your Account </span>
                </h5>
            <div className=""> 
                <h5 className="text-xl text-black mt-2   mb-2 font-semibold text-left">Username</h5>
                <input value={username} onChange={(e)=>setusername(e.target.value)}  type="text " className="w-full lg:w-50 md:w-full p-2 rounded-lg border " placeholder='Username' required/>
                <h5 className=" text-xl text-black mt-2 mb-2 font-semibold text-left">Email</h5>
                <input  value={email} onChange={(e)=>setemail(e.target.value)} type="text " className="w-full lg:w-50 md:w-full p-2 rounded-lg border " placeholder='Email'/>
                <h5 className="text-xl text-black mt-2  mb-2 font-semibold text-left">Password</h5>
                <div className="flex gap-2">
                
                    <input value={password} onChange={(e)=>setpassword(e.target.value)} type={hideshow?'password':'text'} className="w-full lg:w-50 md:w-full border p-2 rounded-lg " placeholder='Password'/>
                    <button className='bg-pink-600 w-10  -mx-10 rounded-e text-black' onClick={()=>setHideShow(!hideshow)}><i className={`${hideshow?'fas fa-eye-slash ':'fas fa-eye'}`} /></button>
                </div>          
            </div>
            <button onClick={SignupHandle} className="btn btn-dark mt-3  bg-pink-600  w-full lg:w-50 md:w-full p-2 rounded-lg "  > Sign up</button>
            <h5 className="text-black font-serif font-bold mt-2">If Already created <span className="text-pink-600"><Link to={'/login'}>Login</Link> </span> </h5>
    
            </div>
        </Layout>
    );
}

export default Signup;
