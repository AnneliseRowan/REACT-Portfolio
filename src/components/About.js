import './About.css';

const About = () => {    
    return (
        <div className="container">
            <div className="bg-image" 
            style={{"backgroundImage": "url('https://mdbootstrap.com/img/Photos/Others/images/76.webp')", "height": "100vh"}}>
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

// const About = () => {
//     return (
//         <div>
//             <div>
//                 <div id="introCarousel" className="carousel slide carousel-fade shadow-2-strong" data-mdb-ride="carousel">
//                     <ol className="carousel-indicators">
//                     <li data-mdb-target="#introCarousel" data-mdb-slide-to="0" className="active"></li>
//                     <li data-mdb-target="#introCarousel" data-mdb-slide-to="1"></li>
//                     <li data-mdb-target="#introCarousel" data-mdb-slide-to="2"></li>
//                     </ol>
//                 </div>
//                 <div className="carousel-inner">
//                 <div className="carousel-item active">
//                     <div className="mask" style={{"backgroundColor": "rgba(0, 0, 0, 0.6)"}}>
//                         <div className="d-flex justify-content-center align-items-center h-100">
//                             <div className="text-white text-center">
//                                 <h1 className="mb-3">Learn Bootstrap 5 with MDB</h1>
//                                 <h5 className="mb-4">Best & free guide of responsive web design</h5>
//                                 <a className="btn btn-outline-light btn-lg m-2" href="https://www.youtube.com/watch?v=c9B4TPnak1A"
//                                     role="button" rel="noreferrer" target="_blank">Start tutorial</a>
//                                 <a className="btn btn-outline-light btn-lg m-2" href="https://mdbootstrap.com/docs/standard/"
//                                     target="_blank" role="button" rel="noreferrer">Download MDB UI KIT</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
    
//                 <div className="carousel-item">
//                     <div className="mask" style={{"backgroundColor": "rgba(0, 0, 0, 0.3)"}}>
//                         <div className="d-flex justify-content-center align-items-center h-100">
//                             <div className="text-white text-center">
//                                 <h2>You can place here any content</h2>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
    
//                 <div className="carousel-item">
//                     <div className="mask" style={{"background": "linear-gradient(45deg, rgba(29, 236, 197, 0.7), rgba(91, 14, 214, 0.7), 100% )"}}>
//                     <div className="d-flex justify-content-center align-items-center h-100">
//                         <div className="text-white text-center">
//                         <h2>And cover it with any mask</h2>
//                         <a className="btn btn-outline-light btn-lg m-2"
//                             href="https://mdbootstrap.com/docs/standard/content-styles/masks/" target="_blank" role="button" rel="noreferrer">Learn
//                             about masks</a>
//                         </div>
//                     </div>
//                     </div>
//                 </div>
            

//                 <a className="carousel-control-prev" href="#introCarousel" role="button" data-mdb-slide="prev">
//                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                 <span className="sr-only">Previous</span>
//                 </a>
//                 <a className="carousel-control-next" href="#introCarousel" role="button" data-mdb-slide="next">
//                 <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                 <span className="sr-only">Next</span>
//                 </a>
//             </div>
            
    

//                 <div className="bg-light text-lg-start">
//                     <div className="py-4 text-center">
//                         <a role="button" class="btn btn-primary btn-lg m-2"
//                         href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA" rel="nofollow" target="_blank">
//                         Learn Bootstrap 5
//                         </a>
//                         <a role="button" className="btn btn-primary btn-lg m-2" href="https://mdbootstrap.com/docs/standard/" target="_blank">
//                         Download MDB UI KIT
//                         </a>
//                     </div> 
            
//                     <hr className="m-0" />
            
//                     <div className="text-center py-4 align-items-center">
//                         <p>Follow MDB on social media</p>
//                         <a href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA" className="btn btn-primary m-1" role="button"
//                         rel="nofollow" target="_blank">
//                         <i className="fab fa-youtube"></i>
//                         </a>
//                         <a href="https://www.facebook.com/mdbootstrap" className="btn btn-primary m-1" role="button" rel="nofollow"
//                         target="_blank">
//                         <i className="fab fa-facebook-f"></i>
//                         </a>
//                         <a href="https://twitter.com/MDBootstrap" className="btn btn-primary m-1" role="button" rel="nofollow"
//                         target="_blank">
//                         <i className="fab fa-twitter"></i>
//                         </a>
//                         <a href="https://github.com/mdbootstrap/mdb-ui-kit" className="btn btn-primary m-1" role="button" rel="nofollow"
//                         target="_blank">
//                         <i className="fab fa-github"></i>
//                         </a>
//                     </div>
            
//                     <div className="text-center p-3" style={{"backgroundColor": "rgba(0, 0, 0, 0.2)"}}>
//                         © 2020 Copyright:
//                         <a className="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
//                     </div>
//             </div>


//         </div>


//     )
// };


export default About;
