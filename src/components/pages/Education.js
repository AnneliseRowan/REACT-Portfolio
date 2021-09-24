import React from 'react';
import './experience.css';


const Education = () => { 
  return (

    <div>
      <header className="bg- text-center py-5 mb-4">
        <div className="container">
            <h1 className="fw-light text-black" style={{fontFamily: "Lobster, cursive", fontSize: "64px"}} >The Education Station</h1>
        </div>
      </header>
      <section className="container" >
        <div className="resume-section-content">
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-2" style={{fontFamily: "Karla", fontWeight:"bold", fontSize:"32px"}}>UNIVERSITY OF NORTH CAROLINA: CHAPEL HILL</h3>
              <div className="subheading mb-2" style={{fontFamily: "Karla", fontSize:"24px"}}>Certificate in Full Stack Javascript Software Engineering</div>
              <p style={{fontFamily: "Karla"}}>•	Computer Science - Web Development Track</p>
            </div>
            <div className="flex-shrink-0" style={{fontFamily: "Karla"}}><span className="text-primary" >September 2021</span></div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-2" style={{fontFamily: "Karla", fontWeight:"bold", fontSize:"32px"}}>COLUMBIA INTERNATIONAL UNIVERSITY</h3>
              <div className="subheading mb-2" style={{fontFamily: "Karla", fontSize:"24px"}}>Double Bachelors of Science</div>
              <p style={{fontFamily: "Karla"}}>•	Magna Cum Laude</p>
            </div>
            <div className="flex-shrink-0" style={{fontFamily: "Karla"}}><span className="text-primary">December 2013</span></div>
          </div>
        </div>
      </section>
    </div>
  )  
};
          

export default Education