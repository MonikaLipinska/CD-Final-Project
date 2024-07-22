import {useState} from "react";
import styles from "@/styles/About.module.scss";
import obrazek7 from "@/photo/obraz7.jpg";
import obrazek1 from "@/photo/obraz1.jpg";
import obrazek2 from "@/photo/obraz2.jpg";
import obrazek3 from "@/photo/obraz3.jpg";


const About = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [obrazek7, obrazek1, obrazek2, obrazek3];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };


    return (
        <div className={styles.about}>
            
            <h1>About the gallery</h1>
            <p>The gallery ......</p>
            <div className={styles.carousel}>
                <button onClick={prevSlide}>Previous</button>
                <div className={styles.carouselWewn} style={{transform: `translateX(-${currentIndex * 100}%)`}}>
                    {images.map((image, index) => (
                        <div className={styles.carouselItem} key={index}>
                            <img src={image} alt={`painting ${index + 1}`}/>
                        </div>
                    ))}
                </div>
                <button onClick={nextSlide}>Next</button>
            </div>
        </div>
    );
};

export default About;