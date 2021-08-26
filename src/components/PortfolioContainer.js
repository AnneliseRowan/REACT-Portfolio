import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About'; 
import Projects from './pages/Projects';
import Experience from './pages/Experience'; 
// import Resume from './pages/Resume'; 
import Education from './pages/Education'; 
import Skills from './pages/Skills';
import Footer from './pages/Footer'; 


export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');
  
    const renderPage = () => {
      if (currentPage === 'Home') {
        return <Home />;
      }
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Projects') {
        return <Projects />;
      }
      if (currentPage === 'Experience') {
        return <Experience />;
      }
      if (currentPage === 'Education') {
        return <Education />;
      }
      if (currentPage === 'Skills') {
        return <Skills />;
      }
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
        <Footer/>
      </div>
    );
  }
  