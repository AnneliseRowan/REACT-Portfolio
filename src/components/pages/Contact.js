import React from 'react';
import './contact.css';
// import { validateEmail } from './utils/Helpers';

// const Contact = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleInputChange = (e) => {
//     const { target } = e;
//     const inputType = target.name;
//     const inputValue = target.value;

//     if (inputType === 'email') {
//       setEmail(inputValue);
//     } else if (inputType === 'name') {
//       setName(inputValue);
//     } else {
//       setMessage(inputValue);
//     }
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     if (!validateEmail(email) || !name) {
//       setErrorMessage('Email is invalid');
//       return;
//     }
    
//     alert(`Hello ${name}`);

//     setName('');
//     setMessage('');
//     setEmail('');
//   };

//   return (
//     <div className="container">
//       <div className="row justify-content-center">
//         <p className="mx-auto" style={{fontFamily: "Lobster, cursive", fontSize:"48px", width:"500px"}}>Love To Hear From You!</p>
//         <form className="form mx-auto">
//           <input
//             className="form-control"
//             value={name}
//             name="name"
//             onChange={handleInputChange}
//             type="text"
//             placeholder="Full Name"
//           />
//           <input
//             className="form-control"
//             value={email}
//             name="email"
//             onChange={handleInputChange}S
//             type="email"
//             placeholder="Email"
//           />
          
//           <input
//             className="form-control"
//             value={message}
//             name="message"
//             onChange={handleInputChange}
//             type="text"
//             placeholder="A Short Message"
//           />
//           <div className="btn-group position-absolute top-50 start-50 translate-middle-y">
//             <button type="submit" className="btn btn-secondary " style={{justifyContent:"center", marginTop:"-41px", marginLeft:"150px"}} onClick={handleFormSubmit}>Submit</button>
//           </div>
//         </form>
//         {errorMessage && (
//           <div>
//             <p className="error-text">{errorMessage}</p>
//           </div>
//         )}
//       </div>

      
//     </div>
//   );
// }

// export default Contact;

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
    
  }

  

  render() {
    return(
      <div>
        <header className="bg- text-center py-5 mb-4">
          <div className="container">
              <h1 className="fw-light text-black" style={{fontFamily: "Lobster, cursive", fontSize: "64px"}} >Let's Chat!</h1>
          </div>
        </header>
        <div className="App container">
          <div className="row justify-content-center">
            <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST" data-netlify="true">
              <div className="form-group">
                <label htmlFor="name" style={{fontFamily: "Lobster, cursive", fontSize:"24px"}}>Name</label>
                <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1" style={{fontFamily: "Lobster, cursive", fontSize:"24px"}}>Email address</label>
                <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
              </div>
              <div className="form-group">
                <label htmlFor="message" style={{fontFamily: "Lobster, cursive", fontSize:"24px"}}>Message</label>
                <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
              </div>
              <button type="submit" className="btn btn-secondary" style={{marginTop:"10px"}}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  onNameChange(event) {
    this.setState({name: event.target.value})
  }

  onEmailChange(event) {
    this.setState({email: event.target.value})
  }

  onMessageChange(event) {
    this.setState({message: event.target.value})
  }

  handleSubmit(event) {
  }
}

export default Contact;
