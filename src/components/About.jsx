import "@/styles/About.scss";

const About = () => {

    return (
    <div className="about">
        <div className="carousel">
            <div className="carousel-wewn">
                <div className="carousel-item">
                    <img src="/Users/ml/Desktop/final-project/src/photo/obraz1.jpg" alt="painting 1" />
                </div>

                <div className="carousel-item">
                    <img src="/Users/ml/Desktop/final-project/src/photo/obraz2.jpg" alt="painting 2"/>
                </div>

                <div className="carousel-item">
                    <img src = "src/photo/obraz3.jpg" alt="painting 3"/>
                </div>

                <div className="carousel-item">
                    <img src = "src/photo/obraz4.jpg" alt="painting 4"/>
                </div>

            </div>
        </div>
        <p>About the Gallery....</p>
    </div>
);
};

export default About;
