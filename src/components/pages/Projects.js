import React from 'react';
import TailoristImage from "../../assets/tailorist.jpg";
import FollowImage from "../../assets/followthereader.png";
import TeamImage from "../../assets/teamprofilegenerator.png"; 
import EmployeeTracker from "../../assets/employeetracker.png"; 
import BudgetTracker from "../../assets/pwa.png"; 
import WorkoutTracker from "../../assets/workout.png"; 
import EcommerceBackEnd from "../../assets/ecommerce.png";
import WeatherDashboard from "../../assets/weather.png"; 
import "./style.css";

const Projects = () => {
    return (
    <div>
        <header className="bg-light text-center py-5 mb-4">
            <div className="container">
                <h1 className="fw-light text-black" style={{fontFamily: "Lobster, cursive", fontSize: "64px"}} >My Latest and Greatest Projects</h1>
            </div>
        </header>
        <div className="container">
            <div className="row">
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-0 shadow h-100">
                        <img src={TailoristImage} className="card-img-top" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title mb-0 caption">The-Tailorist</h5>
                            <a className="social-icon" target="_blank." href="https://github.com/AnneliseRowan/the-tailorist"><i class="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-0 shadow h-100">
                        <img src={FollowImage} className="card-img-top" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title mb-0 caption">Follow-The-Reader</h5>
                            <a className="social-icon" target="_blank." href="https://github.com/AnneliseRowan/project-2"><i class="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-0 shadow h-100">
                        <img src={TeamImage} className="card-img-top" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title mb-0 caption">Team-Profile-Generator</h5>
                            <a className="social-icon" target="_blank." href="https://github.com/AnneliseRowan/team-profile-generator"><i class="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-0 shadow h-100">
                        <img src={EmployeeTracker} className="card-img-top" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title mb-0 caption">Employee-Tracker</h5>
                            <a className="social-icon" target="_blank." href="https://github.com/AnneliseRowan/employee-tracker"><i class="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-0 shadow h-100">
                        <img src={BudgetTracker} className="card-img-top" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title mb-0 caption">PWA-Online-Offline-Budget-Tracker</h5>
                            <a className="social-icon" target="_blank." href="https://github.com/AnneliseRowan/PWA-Online-Offline-Budget-Tracker"><i class="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-0 shadow h-100">
                        <img src={WorkoutTracker} className="card-img-top" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title mb-0 caption">Personalized-Workout-Tracker</h5>
                            <a className="social-icon" target="_blank." href="https://github.com/AnneliseRowan/personalized-workout-tracker"><i class="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-0 shadow h-100">
                        <img src={EcommerceBackEnd} className="card-img-top" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title mb-0 caption">E-Commerce-Back-End</h5>
                            <a className="social-icon" target="_blank." href="https://github.com/AnneliseRowan/e-commerce-back-end"><i class="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-0 shadow h-100">
                        <img src={WeatherDashboard} className="card-img-top" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title mb-0 caption">Weather-Dashboard</h5>
                            <a className="social-icon" target="_blank." href="https://github.com/AnneliseRowan/weather-dashboard"><i class="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}


export default Projects; 