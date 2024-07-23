import {NavLink, Outlet} from "react-router-dom";
import styles from "@/styles/HomePage.module.scss";
import obrazek6 from "@/photo/obraz6.jpg";
import {useState} from "react";
//import styles from "@/styles/HeaderLayout.module.scss";


const HeaderLayout = () => {


    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <img src={obrazek6} alt="Art Gallery Logo" className={styles.logoImage}/>
                    <span className={styles.logoText}>Gallery name</span>
                </div>
                <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
                    <ul className={styles.navList}>
                        <li><NavLink to="/" className={styles.navItem}>Home</NavLink></li>
                        <li>
                            <NavLink to="/about" className={styles.navItem}>About</NavLink>
                            {/*<a href="#" className={styles.navItem}>About</a>*/}
                        </li>
                        <li><NavLink to="/browse" className={styles.navItem}>Browse</NavLink></li>
                        <li><NavLink to="/contact" className={styles.navItem}>Contact</NavLink></li>
                        <li><NavLink to="/help" className={styles.navItem}>Help</NavLink></li>
                    </ul>
                </nav>
                <div className={styles.hamburger} onClick={toggleMenu}>
                    &#9776;
                </div>
            </header>

            <Outlet/>
        </>
    )
}

export default HeaderLayout;