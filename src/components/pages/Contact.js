import React, { useState } from 'react';
import './contact.css';
import { validateEmail } from './utils/Helpers';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
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
      setPhoneNumber(inputValue);
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
    setPhoneNumber('');
    setEmail('');
  };

  return (
    <div>
      <p style={{maxWidth:"680px", margin:"auto", fontFamily: "Lobster, cursive", fontSize:"32px"}}>Love To Hear From You!</p>
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
          value={phoneNumber}
          name="phoneNumber"
          onChange={handleInputChange}
          type="number"
          placeholder="Phone Number"
        />
        <button type="button" style={{marginLeft: "950px"}} onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
