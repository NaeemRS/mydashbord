import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Loginform1 from './Loginform1';

const Layout = ({ children }) => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const handleLogin = () => {
  //   // Perform your login logic here
  //   // Once the user is successfully logged in, update the isLoggedIn state
  //   setIsLoggedIn(true);
  // };

  // if (!isLoggedIn) {
  //   return <Loginform1 onLogin={handleLogin} />;
  // }

  return (
    <>
      <div className="flex">
       <div className='lg:w-[22%] w-[40%] lg:inline-block hidden '> <Sidebar /></div>
        <div className="grow lg:w-[75%] overflow-x-scroll h-screen">
      <Navbar />

          <div className="m-5">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;