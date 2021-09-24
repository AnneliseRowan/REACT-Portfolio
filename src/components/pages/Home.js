import './style.css';

const Home = () => {    
    return (

            
        <div className="container">
            <div className="bg-image" style={{"backgroundImage": "url('https://mdbootstrap.com/img/Photos/Others/images/76.webp')", "height": "100vh"}}>
                <div  className="maintxt position-absolute top-50 start-50 translate-middle">
                    <p style={{fontFamily: "Lobster, cursive", fontSize: "96px"}} id="name"> Annélise Rowan </p>
                    <p style={{fontSize:"32px", marginLeft:"100px"}} id="description">Developer, Designer, Engineer</p>
                </div>
                <div className="social-icons maintxt position-absolute top-100 start-50 translate-middle">
                    <a className="social-icon" href="https://www.linkedin.com/in/anneliserowan/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin-in"></i></a>
                    <a className="social-icon" href="https://github.com/AnneliseRowan" target="_blank" rel="noreferrer"><i class="fab fa-github"></i></a>
                </div>

                
            </div>
        </div>


        
    )

}


export default Home;
