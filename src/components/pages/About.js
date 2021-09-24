import Profile from "../../assets/profile.jpg"; 
import './style.css';

const About = () => {
    return (
        <div id="colorlib-about">
            <div className="container">
                <div className="row row-padded-bottom">
                    <div className="col-md-5 animate-box">
                        <img class="img-responsive about-img col-10" src={Profile} alt="Profile"></img>
                    </div>
                    <div className="col-md-6 col-md-push-1 animate-box">
                        <div className="about-desc">
                            <h2>
                                <span style={{marginLeft: "100px"}}>Bienvenue,</span>
                            </h2>
                            <div className="desc">
                                <div className="rotate">
                                    <h2 className="heading" style={{fontWeight:"bolder"}}>----Get To Know Me----</h2>
                                </div>
                                <p className="col-12" style={{marginLeft: "50px"}}>Full Stack JavaScript Engineer with an emphasis in Front End Development and Design. Established skills in JavaScript, Node.JS, React.JS, MySQL, MongoDB, CSS, HTML and responsive web design looking to leverage diverse background. Known as an innovative problem solver with a passion for developing software that best engages my audience to positively impact user and developer experience. Currently able to apply those skills, while working on a team of four, to develop a fully MERN application called herb-your-enthusiasm that will let users create a plant library and send notifications to water and care for them. An education and professional background in accounting gives me an elite eye for detail and problem solving, and would make me a strong addition to your team.  </p>
                                <p className="col-12" style={{marginLeft: "50px"}}>Apart from being a software engineer, I enjoy a game of Samurai Sudoku every night. I love traveling, meeting new people, and experiences that challenge me. I have ridden an elephant, touched a rhino, pet a lion, and sat on a crocodile. I can handle anything you throw at me! When forced indoors, I watch Chopped and try to imagine what I would do with the basket of ingredients. I enjoy hosting game nights and having people over. You can always find me with a cup of Irish breakfast tea that is constantly needing to be rewarmed.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div> 
    )
}

export default About; 
