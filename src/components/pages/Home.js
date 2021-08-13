import './style.css';

const Home = () => {    
    return (

            
        <div className="container">
            <div className="bg-image" style={{"backgroundImage": "url('https://mdbootstrap.com/img/Photos/Others/images/76.webp')", "height": "100vh"}}>
                <div style={{fontFamily: "Lobster, cursive", fontSize: "96px"}} className="maintxt position-absolute top-50 start-50 translate-middle">
                    Annélise Rowan 
                </div>
                {/* <div style={{fontFamily: "Lobster, cursive", fontSize: "24px"}} className="maintxt position-absolute bottom-40 end-60 translate-middle">
                    Full Stack Javascript Engineer
                    </div> */}
                
            </div>
        </div>


        
    )

}


export default Home;
