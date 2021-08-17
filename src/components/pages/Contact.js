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
      <div className="row justify-content-center">
        <p className="mx-auto" style={{fontFamily: "Lobster, cursive", fontSize:"48px", width:"500px"}}>Love To Hear From You!</p>
        <form className="form mx-auto">
          <input
            className="form-control"
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="Full Name"
          />
          <input
            className="form-control"
            value={email}
            name="email"
            onChange={handleInputChange}S
            type="email"
            placeholder="Email"
          />
          
          <input
            className="form-control"
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="A Short Message"
          />
          <div className="btn-group position-absolute top-50 start-50 translate-middle-y">
            <button type="submit" className="btn btn-secondary " style={{justifyContent:"center"}} onClick={handleFormSubmit}>Submit</button>
          </div>
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
