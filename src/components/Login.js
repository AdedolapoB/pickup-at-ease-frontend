import React from 'react';
import './Login.css'; // Ensure this is the correct path to your Login.css file

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-header">
        <h1>Login</h1>
      </div>
      <form className="login-form">
        <div className="input-group">
          <input type="text" placeholder="Username" />
        </div>
        <div className="input-group">
          <input type="password" placeholder="Password" />
        </div>
        <div className="forgot-password">
          <a href="#">Forgot password?</a>
        </div>
        <button type="submit" className="login-button">LOGIN</button>
        <div className="social-login">
          <button className="google-signup">Sign up with Google</button>
          <button className="facebook-signup">Sign up with Facebook</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
