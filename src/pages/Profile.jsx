import React, { useContext, useEffect ,useState} from 'react';
import Layout from '../Components/Layout';
import Post from '../Components/Post';
import MyContext from '../Context/myContext';
import { Link } from 'react-router-dom';
import StoryBar from '../Components/StoryBar';

const Profile = () => {
    const context = useContext(MyContext);
    const {user ,allposts ,loader } =context;
const profilepic = user? user.profileImage :'src/assets/loading.jpg'

return (

        <Layout>
           <>
            {user?
        <>
    
    <div className="flex max-[450px]:flex-col  mt-5  gap-4 container-fluid justify-center mb-5 p-3  bg-dark">
                <div className=" w-40 h-40 border-4 bg-white max-[450px]:m-auto img rounded-full overflow-hidden " >
                    <img src={profilepic}  alt="" className=" border-1 border-white   shadow-sm w-full h-full object-cover" />
                </div>
                <div className="w-80">
                    <h5 className="text-center text-white font-bold text-xl ">{user.username} <span className="fas fa-check bg-blue-600 p-1 rounded-full text-white "></span></h5>
                    <h5 className="  font-bold text-sm text-white text-wrap"><span className=" fas fa-pen-clip p-1 rounded-full w-auto "></span>{user.bio}</h5>
               <div className="flex p-3 gap-4 ">
                        
                        <div className="text-center p-2">
                                        <i className="mb-2  fas fa-code text-white text-4xl" />
                                        <h5 className="text-center text-white font-bold">{allposts.length}</h5>
                                
                         </div>  
                
                         <div className="text-center p-2">
                                        <i className="mb-2 fab fa-github text-cyan-800 text-4xl" />
                                        <h5 className="text-center text-white font-bold">107K+</h5>
                                
                         </div>  
                         <div className="text-center p-2">
                                        <i className="mb-2 fas fa-terminal text-white text-4xl" />
                                        <h5 className="text-center text-white  font-bold">10K+</h5>
                                
                         </div>  
                
                                

                         
                 </div>
                
                    <button className='btn btn-dark bg-blue-600 w-40'>
                        <Link to={'/profile/edit'}> 
                          Edit Profile
                          </Link>

                          </button>
               


                </div>
                
 
            </div>
        <div className="container-fluid h-svh">
        <StoryBar/>
                <Post/>

        </div>
        
       
                
        
        </>    
    :
    <>
    <div className= " flex justify-center container-fluid">
        <img src="src/assets/loading.jpg" alt="" className="w-32 h-32" />
    </div>
    </>    
    }
                
        </>
        </Layout>
    );
}

export default Profile;
