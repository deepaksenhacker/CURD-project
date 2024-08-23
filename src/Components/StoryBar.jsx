import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import MyContext from '../Context/myContext';
const StoryBar = () => {
    
const context = useContext(MyContext);
const{alluser,loader} = context  
  
  return (
      <>
    <div className="container  text-center mt-3 mb-3 text-3xl font-serif font-bold  text-white ">
         Story <span className="text-sky-500 animate-pulse">Board</span>
        
    </div>      
    <div className="flex overflow-x-auto space-x-4 p-4 scrollbar-hide justify-center">

      {loader?
      
      <div  className="flex-none w-24 h-24 bg-gray-200 rounded-full overflow-hidden">
          <img src="src/assets/loading.jpg" alt="" className="w-full h-full" />

      </div>
       :<>
       {
        alluser.map((item,index)=>{
            const {profileImage ,username,_id }=item
          return (<>
            <div className="">
                 <div key={index} className="flex-none w-24 h-24 bg-gray-200 rounded-full overflow-hidden">
                   <Link to={`/profile/view/${_id}`}>
                    <img src={profileImage} alt="" className="w-full h-full object-cover" />
                    </Link>
              </div>
                      <h5 className="text-center mt-1 font-bold text-cyan-300"><span className="text-white">@</span>{username}</h5>
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
