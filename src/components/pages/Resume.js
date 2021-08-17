import './style.css';

const Resume = () => {
    return (
        <div className="position-absolute top-50 start-50 translate-middle">
            <div id="resume">
                {/* <h2 style={{fontFamily: "Lobster, cursive", fontSize:"48px"}}>Email: Annelise.Rowan@gmail.com</h2>
                <h2 style={{fontFamily: "Lobster, cursive", fontSize:"48px"}}>Phone Number: (904)325-0895</h2> */}
                <span style={{fontFamily: "Lobster, cursive", fontSize:"48px"}}>Download my Resume  </span>
                <a href="../assets/ANROWAN-RESUME.docx" download="ANROWAN-RESUME.docx">
                    <img src="https://img.icons8.com/material/24/000000/download--v1.png" alt="Download my Resume" style={{height:"40px", width:"40px", marginTop:"-15px"}}></img>
                </a>
            </div>
            
        </div>
        
    )
}

export default Resume; 