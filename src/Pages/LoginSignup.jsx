// import React from 'react'
// import './CSS/LoginSignup.css'
// const LoginSignup = () => {
//   return (
//     <div className='loginsingnup'>
//       <div className='loginsignup-container'>
//         <h1>Sign Up</h1>
//         <div className='loginsignup-fields'>
//           <input type="text" placeholder='Your Name'/>
//           <input type="email" placeholder='Email Address'/>
//           <input type="password" placeholder='Password'/>

//         </div>
//         <button>Continue</button>
//         <p className='loginsignup-login'>Already have an account? <span>Login here</span></p>
//         <div className="loginsignup-agree">
//           <input type='checkbox' name='' id=''/>
//           <p>Containing i agree to the term of use & privacy policy.</p>
//         </div>
//       </div>
        
//     </div>
//   )
// }

// export default LoginSignup


import React, { useState } from 'react';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });

      const data = await response.json();
      if (response.ok) {
        alert("Signup successful!");
        // Navigate to dashboard or login
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className='loginsingnup'>
      <div className='loginsignup-container'>
        <h1>Sign Up</h1>
        <div className='loginsignup-fields'>
          <input type="text" placeholder='Your Name' value={name} onChange={e => setName(e.target.value)} />
          <input type="email" placeholder='Email Address' value={email} onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <button onClick={handleSignup}>Continue</button>
        <p className='loginsignup-login'>Already have an account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type='checkbox' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
