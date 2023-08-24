import React, { useState } from 'react';
import LoginForm from "../components/forms/LoginForm"
import Signup from "../components/forms/Signup"

export default function Index() {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [showSignupForm, setShowSignupForm] = useState(false);

  const handleLoginClick = () => {
    setShowLoginForm(true);
    setShowSignupForm(false);
  };

  const handleSignupClick = () => {
    setShowLoginForm(false);
    setShowSignupForm(true);
  };

  return (
    <>
  
      {showLoginForm && (
        <>
          <button className='bg-blue-500 rounded-md text-white px-5 py-2' onClick={handleSignupClick}>Go to Signup</button>
          <LoginForm />
        </>
      )}
      {showSignupForm && (
        <>
          <button className='bg-blue-500 rounded-md text-white px-5 py-2' onClick={handleLoginClick}>Go to Login</button>
          <Signup />
        </>
      )}
    </>
  );
}
