import React from 'react';
import './SignUp.css'; // Make sure this path is correct

const SignUp = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Process form data here
    console.log("Form submitted!");
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Create an Account</h2>
        <input type="text" placeholder="Username" name="username" required />
        <input type="email" placeholder="Email Address" name="email" required />
        <input type="password" placeholder="Password" name="password" required />
        <div className="phone-input-container">
          <select name="countryCode" className="country-code" required>
            <option value="+1">+1</option>
            <option value="+44">+44</option>
            <option value="+91">+91</option>
            {/* Add more country codes as needed */}
          </select>
          <input type="tel" placeholder="Phone Number" name="phone" required />
        </div>
        <input type="text" placeholder="Address Line 1" name="address1" required />
        <input type="text" placeholder="Address Line 2" name="address2" />
        <input type="text" placeholder="City" name="city" required />
        <input type="text" placeholder="State/Province" name="state" required />
        <input type="text" placeholder="Postal/Zip Code" name="postalCode" required />
        <button type="submit" className="submit-btn">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
