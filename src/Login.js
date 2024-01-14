import React from 'react'
import { Link } from 'react-router-dom';
import './style.css';
function Signup() {
  return (
  <>
   <h2 className="name-rest">Login</h2>
   <br />
   <br />
   <br />
    <div className="signup-container">
   
    <form className="signup-form">
      <label htmlFor="username">Username</label>
      <input type="text" id="username" placeholder="Enter your username" />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" placeholder="Enter your email" />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" placeholder="Enter your password" />
<p />
      <button type="submit" className="signup-button">Login</button>
    </form>
  </div>
  <div className='form-below'>
   Don't have an account?
    <Link to={"/Signup"} >SignUp</Link>
  </div>
      </>  
  
  );
}

export default Signup;
