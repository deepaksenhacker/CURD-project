import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import BottomNav from './BottomNav';

const Layout = ({children}) => {
   
    
    
    return (
        <>
         <Navbar /> 
        <div className="">
                 {children}
         </div>  

        <Footer/>
        <BottomNav/>
        </>
    );
}

export default Layout;
