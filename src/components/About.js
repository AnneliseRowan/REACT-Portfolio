

const About = () => {

    const styleObj = {
        background: "url() no-repeat center center fixed",
        webkitBackgroundSize: "cover",
        mozBackgroundSize: "cover",
        backgroundSize: "cover",
        oBackgroundSize: "cover",
    }
    
    
    return (
        <div style={styleObj} className="container">
            <div className="card border-0 shadow my-5">
                <div className="card-body p-5">
                <h1 className="fw-light">Fixed Full Page Background Image</h1>
                <p className="lead">In this snippet, the background image is fixed to the body element. Content on the page will
                    scroll, but the image will remain in a fixed position!</p>
                <p className="lead">Scroll down...</p>
                <div style={{height: "700px"}}></div>
                <p className="lead mb-0">You've reached the end!</p>
                </div>
            </div>
        </div>
    )

}


export default About;