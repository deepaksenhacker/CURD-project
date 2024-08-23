import React from 'react';
import { useNavigate } from 'react-router-dom';

const ButtonBack = () => {
    const navigate =  useNavigate()
    return (
        <>
              <button className='m-3 btn btn-dark bg-white text-black animate-pulse w-20' onClick={()=>navigate(-1)}> <span className="fas fa-chevron-left"></span> Back</button>
            
        </>
    );
}

export default ButtonBack;
