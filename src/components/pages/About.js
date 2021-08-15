import Profile from "../../assets/profile.jpg"; 
import './style.css';

const About = () => {
    return (
        <div className="container-md">
            <div className="row">
                <img src={Profile} className="col-4" alt="..."></img>
                <p className="col-8 align-self-center">
                    <p className="lead" style={{fontFamily: "Lobster, cursive", fontSize:"32px"}}>Bienvenue!</p>
                    <p style={{fontSize:"18px"}}>I am a Full Stack Javascript Engineer with developed skills in JavaScript, Node.JS, React.JS, Webpack, MySQL, MongoDB, CSS, HTML and responsive web design looking to leverage my diverse background. Known as an innovative problem solver with a passion for developing software that best engages my audience to positively impact user and developer experience. I was able to apply those skills recently, when I worked on a team of six to develop a dating app for book “lovers” called Follow The Reader. My education and professional background in accounting gives me an elite eye for detail and problem solving, and would make me a strong addition to your team. </p>
                </p>
            </div>
        </div>

             

    )
}

export default About; 