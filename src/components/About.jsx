//import {useState} from "react";
import styles from "@/styles/About.module.scss";
import Carousel from "@/components/Carousel.jsx";


const About = () => {


    //const [currentIndex, setCurrentIndex] = useState(0);
    //const images = [obrazek7, obrazek1, obrazek2, obrazek3];

    //const nextSlide = () => {
    //setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    //};

    //const prevSlide = () => {
    //setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    //};


    return (
        <div className={styles.about}>

            <h1>About the gallery</h1>
            <p>The gallery has been established......</p>
            <div><Carousel/></div>
            {/*<button onClick={prevSlide}>Previous</button>
                <div className={styles.carouselWewn} style={{transform: `translateX(-${currentIndex * 100}%)`}}>
                    {images.map((image, index) => (
                        <div className={styles.carouselItem} key={index}>
                            <img src={image} alt={`painting ${index + 1}`}/>
                        </div>
                    ))}
                </div>
                <button onClick={nextSlide}>Next</button>
            /</div> */}
        </div>
    );
};

export default About;