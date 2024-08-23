import React, { useState } from 'react';
import Layout from '../Components/Layout';
import{Link, useNavigate} from 'react-router-dom'
import {  toast } from 'react-hot-toast';
const Login = () => {
    const [hideshow , setHideShow] = useState(true);

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const navigate = useNavigate();    
  
// login
const loginHandle = async () => {

    const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
        method : 'POST',
        headers : {
            'content-type': 'application/json'
        },
        body : JSON.stringify({email,password})
    });

     //* receiving response 
    const loginData = await res.json();
    // console.log(loginData);
    // console.log(loginData.token)

    //* condition
    if(loginData.error){
        toast.error(loginData.error);
    }else{
        navigate('/')
        toast.success(loginData.success)
        localStorage.setItem('token', loginData.token)
    }

    setemail("");
    setpassword("");

}


// login

    
    return (

        <Layout>
                        <div className="container  lg:w-50 md:w-96 sm:w-full h-screen">
              <h5 className="mt-6  font-serif text-3xl text-white text-center font-semibold">
                    Login <span className='text-sky-600  '>And Start Your Journey </span>
                </h5>
            <div className=""> 
                <h5 className="text-xl mt-2 mb-2 font-semibold text-left text-white">email</h5>
                <input value={email} onChange={(e)=>setemail(e.target.value)} type="email " className="w-full lg:w-50 md:w-full p-2 rounded-lg  " placeholder='email'/>
                <h5 className="text-xl mt-2 mb-2 font-semibold text-left text-white">Password</h5>
                <div className="flex gap-2">
                
                    <input value={password} onChange={(e)=>setpassword(e.target.value)}  type={hideshow?'password':'text'} className="w-full lg:w-50 md:w-full p-2 rounded-lg " placeholder='Password'/>
                    <button className='bg-sky-600 w-10 -mx-10 rounded-e text-white' onClick={()=>setHideShow(!hideshow)}><i className={`${hideshow?'fas fa-eye-slash ':'fas fa-eye'}`} /></button>
                </div>          
            </div>
            <button onClick={loginHandle} className="btn btn-dark mt-3  bg-sky-600  w-full lg:w-50 md:w-full p-2 rounded-lg "  > Login</button>
            <h5 className="font-serif font-bold mt-2 text-white">If you not have any account <span className="text-sky-600"><Link to={'/signup'}>Signup</Link> </span> </h5>
    
            </div>

        </Layout>
    );
}

export default Login;
