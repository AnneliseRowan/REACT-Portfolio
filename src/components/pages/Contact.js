import React, {useState} from 'react';
import './contact.css';
import { validateEmail } from './utils/Helpers';

const Contact = () => { 

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("hey were doing this handleForm")
    if (!validateEmail(email) || !name) {
      setMessage('Email is invalid');
      return;
    }
    
    alert(`Hello ${name}`);

    setName('');
    setMessage('');
    setEmail('');
  };

  const onNameChange = (event) => {
    setName(event.target.value)
  }

  const onEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const onMessageChange = (event) => {
    setMessage(event.target.value)
  }

  return(
    <div>
      <header className="bg- text-center py-5 mb-4">
        <div className="container">
            <h1 className="fw-light text-black" style={{fontFamily: "Lobster, cursive", fontSize: "64px"}} >Let's Chat!</h1>
        </div>
      </header>
      <div className="App container">
        <div className="row justify-content-center">
          <form id="contact-form" onSubmit={handleFormSubmit} method="POST" data-netlify="true">
            <div className="form-group">
              <label htmlFor="name" style={{fontFamily: "Lobster, cursive", fontSize:"24px"}}>Name</label>
              <input type="text" className="form-control" value={name} onChange={onNameChange.bind()} />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1" style={{fontFamily: "Lobster, cursive", fontSize:"24px"}}>Email address</label>
              <input type="email" className="form-control" aria-describedby="emailHelp" value={email} onChange={onEmailChange.bind()} />
            </div>
            <div className="form-group">
              <label htmlFor="message" style={{fontFamily: "Lobster, cursive", fontSize:"24px"}}>Message</label>
              <textarea className="form-control" rows="5" value={message} onChange={onMessageChange.bind()} />
            </div>
            <button type="submit" className="btn btn-secondary" style={{marginTop:"10px"}}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );

}

export default Contact