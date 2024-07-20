import styles from "@/styles/HomePage.module.scss";
import obrazek6 from "@/photo/obraz6.jpg"
import {NavLink} from "react-router-dom";

const HomePage = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <img src={obrazek6} alt="Art Gallery Logo" className={styles.logoImage}/>
                    <span className={styles.logoText}>Gallery name</span>
                </div>
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li><a href="#" className={styles.navItem}>Home</a></li>
                        <li>
                            <NavLink to="/about" className={styles.navItem}>About</NavLink>
                            {/*<a href="#" className={styles.navItem}>About</a>*/}
                        </li>
                        <li><a href="#" className={styles.navItem}>Browse</a></li>
                        <li><a href="#" className={styles.navItem}>Contact</a></li>
                        <li><a href="#" className={styles.navItem}>Help</a></li>
                    </ul>
                </nav>
            </header>

            <section className={styles.section}>
                <img src={obrazek6} alt="Art Gallery 5" className={styles.logoImage2}/>

            </section>

            <footer className={styles.footer}>
                <p>Address</p>
            </footer>

        </div>
    )
}

export default HomePage;