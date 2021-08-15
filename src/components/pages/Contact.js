import React, { useState } from 'react';
import './contact.css';
import { validateEmail } from './utils/Helpers';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !name) {
      setErrorMessage('Email is invalid');
      return;
    }
    
    alert(`Hello ${name}`);

    setName('');
    setMessage('');
    setEmail('');
  };

  return (
    <div className="container">
      <div className="bg-image" style={{backgroundImage: 'url("../../assets/snowsmall.jpg")', "height": "100vh"}}>

        <p style={{maxWidth:"925px", margin:"auto", fontFamily: "Lobster, cursive", fontSize:"40px"}}>Love To Hear From You!</p>
        <form className="form mx-auto">
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="Full Name"
          />
          <input
            value={email}
            name="email"
            onChange={handleInputChange}S
            type="email"
            placeholder="Email"
          />
          
          <input
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="A Short Message"
          />
          <button type="button" style={{marginLeft: "1350px"}} onClick={handleFormSubmit}>Submit</button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
