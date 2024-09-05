import React, { Children, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import MyContext from './myContext';
import { useNavigate } from 'react-router-dom';


const MyState = (props) => {
  // const navigate = useNavigate();  




// userInfo
  const [loader, setloader] = useState(false);

  //* get Notes
  const [allposts, setallposts] =  useState([]);
  const [AllPosts ,setAllPosts] = useState([]);
// single post

  const [title, settitle] = useState('');
const [description, setdescription] = useState('');
const [keywords, setkeywords] = useState([]);
const [filename ,setFilename] = useState('');
//postimage



// user

const [user ,setuser] = useState([]);
    const ProfileData=  async()=>{
      setloader(true);
        try {
          const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/user/info` ,{
            method :'GET',
            headers :{
              'Content-Type':'application/json',
              'auth-token' :localStorage.getItem('token')
            }
            
          }) ;
          const data = await res.json();
          if(data){
          const convert = await data.userdata;
          setuser(convert);
          setloader(false);
          
          console.log(convert);
          }
          else{
            setuser(null)
          }
    
    
        } catch (error) {
              console.log(error)      
        }
    }
    


useEffect(()=>{
    ProfileData();

},[]);

const [alluser , setAlluser] = useState([]);
const allusers = async()=>{
  try {
    setloader(true)
    const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/allusers`,{
      method :"GET",
      headers:{
        'Content-Type':'application/json'
      }
    })

    const user = await res.json();
    if(user.error){
      toast.error(user.error)
    }
    setAlluser(user.users);
    
    console.log(user);
    setloader(false);
  } catch (error) {
    console.error(error)
  }
}
useEffect(()=>{
  allusers();
},[])

// user 



const sendPost =async()=>{


  try {
    const res = await fetch( `${import.meta.env.VITE_API_URL}/posts/create`,{
      method :'POST',
      headers:{
        'Content-Type':'application/json',
        'auth-token':localStorage.getItem('token')
      },
      body : JSON.stringify({title,description,keywords ,filename}
        
        )})



      const postupload = await res.json();
      console.log(postupload);
      getPosts();

      if(postupload.error){
        toast.error(postupload.error);
       
      }   
      else{
        toast.success(postupload.success);
        
      
      }
      settitle('');
      setdescription('');
      setkeywords([]);

    } catch (error) {
      console.log(error);
  
    }


}



  //* Get All the user Notes Functions
      const getPosts = async () => {
        setloader(true)
        try {
          const res = await fetch( `${import.meta.env.VITE_API_URL}/posts/user/posts`, {
         
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
          }
        });
          const notesData = await res.json();
          console.log(notesData.posts);
          setallposts(notesData.posts);
          setloader(false)
        } catch (error) {
          console.log(error)
          setloader(false)
        }
      }

// delete

const DeletePost = async(id)=>{
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/posts/delete/${id}`,{
        method :'POST',
        headers :{
          'Content-Type':'application/json',
          'auth-token':localStorage.getItem('token')
        }
        
      });
      const data = res.json();
    getPosts();
      toast.success(data.success);

    } catch (error) {
      
    }
}

// delete






// like user


      // all user posts






      const getAllPosts = async () => {
        setloader(true)
        try {
          const res = await fetch( `${import.meta.env.VITE_API_URL}/posts/view/all`, {
         
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
          const notesData = await res.json();
          console.log(notesData.allposts);
          setAllPosts(notesData.allposts);
          setloader(false)
        } catch (error) {
          console.log(error)
          setloader(false)
        }
      }


// profile Data 

// end posts
    return (
      <MyContext.Provider value={{alluser,setuser, user,filename ,setFilename, getPosts,loader ,allposts ,getAllPosts ,AllPosts, sendPost , title ,keywords,setkeywords , description ,settitle ,setdescription ,DeletePost ,setloader}}>
        {props.children}

        </MyContext.Provider>
    );
}

export default MyState;
