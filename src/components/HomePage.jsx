import styles from "@/styles/HomePage.module.scss";
import obrazek6 from "@/photo/obraz6.jpg"
import HeaderLayout from "@/components/HeaderLayout.jsx";


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
                <img src={obrazek6} alt="Art Gallery 5" className={styles.logoImage2}/>

            </section>

            <footer className={styles.footer}>
                <br>
                </br>
                <p>Gallery</p>
                <p>Example street 7</p>
                <p>zip code</p>
                <p>Warsaw</p>
                <br/>
            </footer>

        </div>
    )
}

export default HomePage;