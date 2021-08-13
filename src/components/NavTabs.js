function NavTabs({ currentPage, handlePageChange }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light static-top mb-5 shadow">
            <div className="container">
                <a className="navbar-brand">AR</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
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
                            <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} > Contact </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
  }
  
  export default NavTabs;