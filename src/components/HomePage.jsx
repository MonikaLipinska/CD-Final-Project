import styles from "@/styles/HomePage.module.scss";
import obrazek0 from "@/photo/obraz0.jpeg";
import HeaderLayout from "@/components/HeaderLayout.jsx";
import twitterIcon from "@/photo/twittericon.png";
import instagramIcon from "@/photo/instagramicon.png";
import facebookIcon from "@/photo/fbicon.png";


const HomePage = () => {


    return (
        <div className={styles.container}>
            <header className={HeaderLayout}>
                {/* <div className={styles.logo}>
                    <img src={obrazek6} alt="Art Gallery Logo" className={styles.logoImage}/>
                    <span className={styles.logoText}>Gallery name</span>
                </div>
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li><a href="/home" className={styles.navItem}>Home</a></li>
                        <li>
                            <NavLink to="/about" className={styles.navItem}>About</NavLink>
                            <a href="#" className={styles.navItem}>About</a>
                        </li>
                        <li>
                            <NavLink to="/browse" className={styles.navItem}>Browse</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={styles.navItem}>Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="/help" className={styles.navItem}>Help</NavLink>
                        </li>
                    </ul>
                </nav> */}
            </header>

            <section className={styles.section}>
                <img src={obrazek0} alt="Art Gallery" className={styles.logoImage2}/>

            </section>

            <footer className={styles.footer}>
                <br>
                </br>
                <p>Gallery</p>
                <p>Example Street 7</p>
                <p>zip code</p>
                <p>Warsaw</p>
                <br/>

                <div className={styles.socialIcons}>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src={twitterIcon} alt="Twitter"/>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={facebookIcon} alt="Facebook"/>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src={instagramIcon} alt="Instagram"/>
                    </a>
                </div>

            </footer>

        </div>
    )
}

export default HomePage;