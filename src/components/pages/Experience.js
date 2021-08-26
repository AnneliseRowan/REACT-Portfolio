import React from 'react';
import './experience.css';


const Experience = () => { 
  return (

    <div>
      <header className="bg- text-center py-5 mb-4">
        <div className="container">
            <h1 className="fw-light text-black" style={{fontFamily: "Lobster, cursive", fontSize: "64px"}} >My Killer Experience</h1>
        </div>
      </header>
      <section className="container" >
        <div className="resume-section-content">
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-2" style={{fontFamily: "Karla", fontWeight:"bold"}}>SOFTWARE ENGINEERING</h3>
              <div className="subheading mb-2" style={{fontFamily: "Karla"}}>University of NC: Chapel Hill</div>
              <p style={{fontFamily: "Karla"}}>•	Creating responsive web pages for modern browsers using HTML5, CSS3, Jquery, Bootstrap, Materialize, and Javascript with UX and UI in mind</p>
              <p style={{fontFamily: "Karla"}}>•	Consuming RESTful APIs from third party sites such as Open Weather API, Rapid API, the-cocktail-database API, Google-Translate API.</p> 
              <p style={{fontFamily: "Karla"}}>•	Collaborating as a team using Git and Github, writing secure and tested full-stack applications and deploying them on Github and Heroku</p>
            </div>
            <div className="flex-shrink-0" style={{fontFamily: "Karla"}}><span className="text-primary" >2021 - Present</span></div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-2" style={{fontFamily: "Karla", fontWeight:"bold"}}>STAFF ACCOUNTANT</h3>
              <div className="subheading mb-2" style={{fontFamily: "Karla"}}>The BeanCounter</div>
              <p style={{fontFamily: "Karla"}}>•	Analyzed budgets, financial reports and projections for accurate reporting of financial standing.</p>
              <p style={{fontFamily: "Karla"}}>•	Investigated and resolved variances in digital and physical records to promote record integrity and resolve liabilities.</p>
              <p style={{fontFamily: "Karla"}}>•	Tracked and recorded expenses and reconciled accounts to maintain accurate, current and compliant financial records.</p>
            </div>
            <div className="flex-shrink-0" style={{fontFamily: "Karla"}}><span className="text-primary">2019 - 2020</span></div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-2" style={{fontFamily: "Karla", fontWeight:"bold"}}>OFFICE MANAGER</h3>
              <div className="subheading mb-2" style={{fontFamily: "Karla"}}>Osterlund Architects, PLLC</div>
              <p style={{fontFamily: "Karla"}}>•	Uploaded and maintained office billing and accounting system using difference services: Billquick, Core, and Quickbooks</p>
              <p style={{fontFamily: "Karla"}}>•	Provided the organization for the office and managed the scheduling for each individual while supporting an open line of communication between everyone</p>
              <p style={{fontFamily: "Karla"}}>•	Worked diligently to solve any issues that arose: making phone calls, visiting offices, or through problem solving</p>
            </div>
            <div className="flex-shrink-0" style={{fontFamily: "Karla"}}><span className="text-primary">2017 - 2018</span></div>
          </div>
        </div>
      </section>
    </div>
  )  
};
          

export default Experience