import './pages/style.css';
import Navbar from 'react-bootstrap/Navbar';

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <Navbar className="navbar navbar-expand-lg navbar-light bg-light static-top mb-5 shadow">
            <div className="container">
                <a className="navbar-brand"style={{fontFamily: "Lobster, cursive", fontSize:"32px"}}>AR</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul id="navOptions" className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a href="#home" onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'} > Home </a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'} > About </a>
                        </li>
                        <li className="nav-item">
                            <a href="#projects" onClick={() => handlePageChange('Projects')} className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'} > Projects </a>
                        </li>
                        <li className="nav-item">
                            <a href="#experience" onClick={() => handlePageChange('Experience')} className={currentPage === 'Experience' ? 'nav-link active' : 'nav-link'} > Experience </a>
                        </li>
                        <li className="nav-item">
                            <a href="#education" onClick={() => handlePageChange('Education')} className={currentPage === 'Education' ? 'nav-link active' : 'nav-link'} > Education </a>
                        </li>
                        <li className="nav-item">
                            <a href="#skills" onClick={() => handlePageChange('Skills')} className={currentPage === 'Skills' ? 'nav-link active' : 'nav-link'} > Skills </a>
                        </li>
                    </ul>
                </div>
            </div>
        </Navbar>

    );
  }
  
  export default NavTabs;