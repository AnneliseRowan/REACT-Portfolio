import './style.css'; 

const Skills = () => {
    return (
        <div className="container">
            <header className="bg- text-center py-5 mb-4">
                <div className="container">
                    <h1 className="fw-light text-black" style={{fontFamily: "Lobster, cursive", fontSize: "64px"}} >My Changing and Growing Skillset</h1>
                </div>
           </header>
          <div className="subheading mb-3" style={{fontFamily: "Karla", fontWeight: "bold", fontSize: "28px"}}>Programming Languages &amp; Tools</div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item"><i className="fab fa-html5" /></li>
            <li className="list-inline-item"><i className="fab fa-css3-alt" /></li>
            <li className="list-inline-item"><i className="fab fa-js-square" /></li>
            <li className="list-inline-item"><i className="fab fa-node-js" /></li>
            <li className="list-inline-item"><i className="fas fa-database" /></li>
            <li className="list-inline-item"><i className="fab fa-react" /></li>
            <li className="list-inline-item"><i className="fab fa-npm" /></li>
            <li className="list-inline-item"><i className="fab fa-bootstrap" /></li>
            <li className="list-inline-item"><i className="fab fa-git" /></li>
            <li className="list-inline-item"><i className="fab fa-github" /></li>
          </ul>
          <div className="subheading mb-3" style={{fontFamily: "Karla", fontWeight: "bold", fontSize: "28px"}}>Workflow</div>
          <ul className="fa-ul mb-0" style={{fontFamily: "Karla", fontSize: "18px"}}>
            <li>
              <span className="fa-li"><i className="fas fa-check" /></span>
              Mobile-First, Responsive Design
            </li>
            <li>
              <span className="fa-li"><i className="fas fa-check" /></span>
              Webpack
            </li>
            <li>
              <span className="fa-li"><i className="fas fa-check" /></span>
              Uniqe Ability To Design Empathetically
            </li>
            <li>
              <span className="fa-li"><i className="fas fa-check" /></span>
              RESTful APIs, Postman, Insomnia
            </li>
            <li>
              <span className="fa-li"><i className="fas fa-check" /></span>
              Express.JS
            </li>
            <li>
              <span className="fa-li"><i className="fas fa-check" /></span>
              Heroku
            </li>
            <li>
              <span className="fa-li"><i className="fas fa-check" /></span>
              Object-Oriented-Programming, OOP
            </li>
            <li>
              <span className="fa-li"><i className="fas fa-check" /></span>
              UX and UI Design Skills
            </li>
            <li>
              <span className="fa-li"><i className="fas fa-check" /></span>
              Collaborative TeamWork
            </li>
            <li>
              <span className="fa-li"><i className="fas fa-check" /></span>
              Abstract &amp; Logical Thinker, Adaptable, Flexible, Drive to Learn, Results-Oriented
            </li>
          </ul>
        </div>
    );

}

export default Skills; 