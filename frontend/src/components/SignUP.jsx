import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  
import './LS.css';
import user_icon from '../assets/person.png';
import pass_icon from '../assets/password.png';
import email_icon from '../assets/email.png';

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/signup', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200) {  
        navigate('/login'); 
      } else {
        console.log('Error:', response.data.message);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const redirectToLoginPage = () => {
    navigate('/login'); 
  };

  return (
    <div className='container'>
      <div className='header'>
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <form className="inputs" onSubmit={handleSubmit}>
        <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" name="username" placeholder='Name' value={formData.username} onChange={handleChange} />
        </div>
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" name="email" placeholder='Email' value={formData.email} onChange={handleChange} />
        </div>
        <div className="input">
          <img src={pass_icon} alt="" />
          <input type="password" name="password" placeholder='Password' value={formData.password} onChange={handleChange} />
        </div>
        <div className="submit-container">
          <button type="submit" className="submit" onClick={handleSubmit}>Sign-up</button>
        </div>
      </form>
      <div className="login-container">
        <p>Already have an account? <button onClick={redirectToLoginPage} className="login-button">Login</button></p>
      </div>
    </div>
  );
};