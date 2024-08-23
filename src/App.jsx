import React from 'react';
import {BrowserRouter as Router , Route , Routes, useNavigate, Navigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import MyState from './Context/myState';
import Home from './pages/Home';
import NoPage from './pages/NoPage'

import Profile from './pages/Profile';
import Login from './pages/Login';

import Signup from './pages/Signup';
import Create from './pages/Create';
import Update from './pages/Update';
import Navbar from './Components/Navbar';
import { Toaster } from 'react-hot-toast';
import AllPosts from './pages/AllPosts';
import EditPage from './pages/EditPage';
import ViewPost from './pages/ViewPost';
import EditPost from './pages/EditPost';
import UploadImage from './pages/UploadImage';

const App = () => {

  return (
    <>
    
   <MyState>
    
      <Router>
      
      
        
            <Routes>
              
              <Route path='/' element={<Home/>}/>  
             
                   <Route path='/profile' element={ <ProtectedRoute> <Profile/>  </ProtectedRoute>}/>  
              
              <Route path='/login' element={<Login/>}/>  
              
              <Route path='/signup' element={<Signup/>}/>  
              
              <Route path='/posts' element={ <ProtectedRoute><AllPosts/></ProtectedRoute> }/>  
              
              <Route path='/create' element={<ProtectedRoute>  <Create/> </ProtectedRoute>}/>
              
              <Route path='/404' element={<NoPage/>}/>
              
              <Route path='/posts/view/:id' element={<ProtectedRoute> <ViewPost/> </ProtectedRoute>}/>
              
              <Route path='/profile/edit' element={ <ProtectedRoute>  <EditPage/> </ProtectedRoute>  }/>
                
              <Route path='/post/:id/edit' element={<ProtectedRoute> <EditPost/> </ProtectedRoute>}/>
              <Route path='/uploadimage' element={<ProtectedRoute>   <UploadImage/> </ProtectedRoute>  }/>
                
            
          </Routes>  
      <Toaster/>
      </Router>      
</MyState>




    </>
  );
}

export default App;
export const ProtectedRoute = ({children})=>{
  const token = localStorage.getItem('token');
  if(token){
     return children
  }
  else{
    return <Navigate to={'/login'}  /> 
  }
}