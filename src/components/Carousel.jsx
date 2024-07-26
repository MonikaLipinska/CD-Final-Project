import {useEffect, useState} from 'react';
import styles from "@/styles/About.module.scss";
import obrazek1 from "@/photo/obraz1.jpg";
import obrazek2 from "@/photo/obraz2.jpg";
import obrazek3 from "@/photo/obraz3.jpg";
import obrazek4 from "@/photo/obraz4.jpg";
import obrazek8 from "@/photo/obraz8.jpeg";
import obrazek9 from "@/photo/obraz9.jpeg";


const Carousel = () => {
    const images = [
        obrazek1, obrazek2, obrazek3, obrazek4, obrazek8, obrazek9
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className={styles.carouselContainer}>
            <button className={styles.carouselButtonPrev} onClick={goToPrevious}>❮</button>
            <div className={styles.carouselSlide}>
                <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`}/>
            </div>
            <button className={styles.carouselButtonNext} onClick={goToNext}>❯</button>
        </div>
    );
};

export default Carousel;

