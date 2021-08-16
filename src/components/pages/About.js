import Profile from "../../assets/profile.jpg"; 
import './style.css';

const About = () => {
    return (
        <div id="colorlib-about">
            <div className="container">
                <div className="row text-center">
                    <h2 className="bold">About</h2>
                </div>
                <div className="row row-padded-bottom">
                    <div className="col-md-5 animate-box">
                        <img class="img-responsive about-img col-10" src={Profile} alt="html5 bootstrap template by colorlib.com"></img>
                    </div>
                    <div className="col-md-6 col-md-push-1 animate-box">
                        <div className="about-desc">
                            <h2><span>Noah</span><span>Henderson</span></h2>
                            <div className="desc">
                                <div className="rotate">
                                    <h2 className="heading">About</h2>
                                </div>
                                <p>A small river named Duden <a href="#">flows by their place</a> and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.</p>
                                <p class="colorlib-social-icons">
                                    <a href="#"><i class="icon-facebook4"></i></a>
                                    <a href="#"><i class="icon-twitter3"></i></a>
                                </p>
                                <p><a href="work.html" className="btn btn-primary btn-outline">View My Works</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div> 
        

             

    )
}

export default About; 



        // <div className="container-md">
        //     <div className="row">
        //         <img src={Profile} className="col-4" alt="..."></img>
        //         <p className="col-8 align-self-center">
        //             <p className="lead" style={{fontFamily: "Lobster, cursive", fontSize:"32px"}}>Bienvenue!</p>
        //             <p style={{fontSize:"18px"}}>I am a Full Stack Javascript Engineer with developed skills in JavaScript, Node.JS, React.JS, Webpack, MySQL, MongoDB, CSS, HTML and responsive web design looking to leverage my diverse background. Known as an innovative problem solver with a passion for developing software that best engages my audience to positively impact user and developer experience. I was able to apply those skills recently, when I worked on a team of six to develop a dating app for book “lovers” called Follow The Reader. My education and professional background in accounting gives me an elite eye for detail and problem solving, and would make me a strong addition to your team. </p>
        //         </p>
        //     </div>
        // </div>