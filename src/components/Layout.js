import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Loginform1 from './Loginform1';

const Layout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform your login logic here
    // Once the user is successfully logged in, update the isLoggedIn state
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return <Loginform1 onLogin={handleLogin} />;
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-auto">
        <Sidebar />
        <div className="grow">
          <div className="m-5">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;