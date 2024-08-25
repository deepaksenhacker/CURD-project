import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import MyContext from '../Context/myContext';
const StoryBar = () => {
    
const context = useContext(MyContext);
const{alluser,loader} = context  
  
  return (
      <>
          
    <div className="flex  overflow-x-auto space-x-4 p-4 scrollbar-hide justify-center w-full min[500px]:w-100" >

      {loader?
      
      <div  className="flex-none w-14 h-14 lg:w-24 lg:h-24 bg-gray-200 rounded-full overflow-hidden">
          <img src="src/assets/loading.jpg" alt="" className="w-full h-full" />

      </div>
       :<>
       {
        alluser.map((item,index)=>{
            const {profileImage ,username,_id }=item
          return (<>
            <div className="">
                 <div key={index} className="flex-none w-16 h-16 border-4 border-pink-600 bg-gray-200  rounded-full overflow-hidden">
                   <Link to={`/profile/view/${_id}`}>
                    <img src={profileImage} alt="" className="w-full h-full object-cover" />
                    </Link>
              </div>
              <h5 className="text-black text-sm font-bold">{username.length>5?username.slice(0,7)+"...":username}</h5>
            
            </div>
          </>)
        })
       }   
      
       </>


    } 

       
 </div>     

          </>
        );
}

export default StoryBar;
