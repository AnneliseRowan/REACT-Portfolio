import './style.css';
//import Res from "../assets/ANROWAN-RESUME.docx"; 

const Resume = () => {
    return (
        <div>
            <header className="bg-light text-center py-5 mb-4">
                <div className="container">
                    <h1 className="fw-light text-black" style={{fontFamily: "Lobster, cursive", fontSize: "64px"}} >Download My Resume</h1>
                    <a href="https://docs.google.com/document/d/1zPXTHRwFn3A_XsrZz-JfS2GyD5WN0nOCpBq_QVi8y3A/edit?usp=sharing" target="blank">
                        <img src="https://img.icons8.com/material/24/000000/download--v1.png" alt="Download my Resume" style={{height:"40px", width:"40px", marginTop:"15px"}}></img>
                    </a>
                </div>
            </header>

        </div>
        
    )
}

export default Resume; 