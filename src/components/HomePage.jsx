import "@/styles/Homepage.scss";

const HomePage = () => {


    return (
        <Content classNme={styles.container}>
        <header className={styles.homepage}>
            < div className={styles.logo}>
                <img src = "./obraz6.jpg" alt="Art Gallery Logo" className={styles.logoImage}/>
                <span className={styles.logoText}>Gallery name</span>

            </div>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li><a href="#homepage" className={styles.navItem}>Home</a></li>
                    <li><a href="#about" className={styles.navItem}>About</a></li>
                    <li><a href="#browse" className={styles.navItem}>Browse</a></li>
                    <li><a href="#contact" className={styles.navItem}>Contact</a></li>
                    <li><a href="#help" className={styles.navItem}>Help</a></li>
                </ul>
            </nav>
        </header>

            <section className={styles.section}>
                <img src={"./obraz6.jpg" alt = "Art Gallery 5" className={styles.logoImage2}}/>

            </section>

            <footer className={styles.footer}>
                <p>Address</p>
            </footer>

        </Content>
    );
}
}

export default HomePage;