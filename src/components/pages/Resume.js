import './style.css';

const Resume = () => {
    return (
        <div>
            <header className="bg-light text-center py-5 mb-4">
                <div className="container">
                    <h1 className="fw-light text-black" style={{fontFamily: "Lobster, cursive", fontSize: "64px"}} >Download My Resume</h1>
                    <a href="../assets/ANROWAN-RESUME.docx" download="ANROWAN-RESUME.docx">
                        <img src="https://img.icons8.com/material/24/000000/download--v1.png" alt="Download my Resume" style={{height:"40px", width:"40px", marginTop:"15px"}}></img>
                    </a>
                </div>
            </header>

        </div>
        
    )
}

export default Resume; 