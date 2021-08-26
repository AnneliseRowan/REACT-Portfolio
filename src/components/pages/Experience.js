import React, {useState} from 'react';
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
              <h3 className="mb-0">SOFTWARE ENGINEERING IMMERSIVE STUDENT</h3>
              <div className="subheading mb-3">University of NC: Chapel Hill</div>
              <p>•	Creating responsive web pages for modern browsers using HTML5, CSS3, Jquery, Bootstrap, Materialize, and Javascript with UX and UI in mind
                •	Consuming RESTful APIs from third party sites such as Open Weather API, Rapid API, the-cocktail-database API, Google-Translate API. 
                •	Collaborating as a team using Git and Github, writing secure and tested full-stack applications and deploying them on Github and Heroku                                
              </p>
            </div>
            <div className="flex-shrink-0"><span className="text-primary">2021 - Present</span></div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">STAFF ACCOUNTAINT</h3>
              <div className="subheading mb-3">The BeanCounter</div>
              <p>•	Analyzed budgets, financial reports and projections for accurate reporting of financial standing.
                •	Investigated and resolved variances in digital and physical records to promote record integrity and resolve liabilities.
                •	Tracked and recorded expenses and reconciled accounts to maintain accurate, current and compliant financial records. 
              </p>
            </div>
            <div className="flex-shrink-0"><span className="text-primary">2019 - 2020</span></div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">OFFICE MANAGER</h3>
              <div className="subheading mb-3">Osterlund Architects, PLLC</div>
              <p>•	Uploaded and maintained office billing and accounting system using difference services: Billquick, Core, and Quickbooks
                •	Provided the organization for the office and managed the scheduling for each individual while supporting an open line of communication between everyone
                •	Worked diligently to solve any issues that arose: making phone calls, visiting offices, or through problem solving
              </p>
            </div>
            <div className="flex-shrink-0"><span className="text-primary">2017 - 2018</span></div>
          </div>
        </div>
      </section>
      <hr className="m-0" />
    </div>
  )  

};
          

    




export default Experience