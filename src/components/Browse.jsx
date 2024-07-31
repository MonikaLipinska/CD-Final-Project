import {Link, Outlet, Route, Routes} from "react-router-dom";
import styles from "@/styles/Browse.module.scss";
import obrazek1 from "@/photo/obraz4.jpg";
import obrazek2 from "@/photo/obraz2.jpg";
import obrazek3 from "@/photo/obraz3.jpg";
import ArtistPage from "@/components/ArtistPage.jsx";
import WorkPage from "@/components/WorkPage.jsx";
import CategoryPage from "@/components/CategoryPage.jsx";


{/*const FavoritesPage = () => {
    const {id} = useParams();
    return <div>Favorites {id}</div>;
};*/
}
const artists = [
    {
        id: 1,
        name: "One",
        image: "AE2",
        description: "Opis/Description"
    },
    {
        id: 2,
        name: "Two",
        image: "monroe",
        description: "Opis/Description"
    },
    {
        id: 3,
        name: "Three",
        image: "dali",
        description: "Opis/Description"
    }
];
const Browse = () => {
    return (
        <>
            <div className={styles.browse}>
                <h2>Browse</h2>
                <div className={styles.imageRow}>
                    <img src={obrazek1} alt="Obrazek 1"/>
                    <img src={obrazek2} alt="Obrazek 2"/>
                    <img src={obrazek3} alt="Obrazek 3"/>

                </div>
                <div className={styles.menuContainer}>
                    <ul className={styles.menu}>
                        <li className={styles.menuItem}>Artist
                            <ul className={styles.submenu}>
                                {artists.map((artist) => (
                                    <li key={artist.id}>
                                        <Link to={`/artist/${artist.id}`}>
                                            {artist.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        {/*<li><NavLink to="/artist/2">Artist 2</NavLink></li>
                                <li><NavLink to="/artist/3">Artist 3</NavLink></li>*/}

                        <li className={styles.menuItem}>Work
                            <ul className={styles.submenu}>
                                <li><Link to="/work/1">Work 1</Link></li>
                                <li><Link to="/work/2">Work 2</Link></li>
                                <li><Link to="/work/3">Work 3</Link></li>
                            </ul>
                        </li>
                        <li className={styles.menuItem}>Category
                            <ul className={styles.submenu}>
                                <li><Link to="/category/paintings">Paintings</Link></li>
                                <li><Link to="/category/graphics">Graphics</Link></li>
                                <li><Link to="/category/photos">Photos</Link></li>
                            </ul>
                        </li>
                        {/*} <li className={styles.menuItem}>Favorites
                            <ul className={styles.submenu}>
                                <li><NavLink to="/favorites/1">Favorite 1</NavLink></li>
                                <li><NavLink to="/favorites/2">Favorite 2</NavLink></li>
                                <li><NavLink to="/favorites/3">Favorite 3</NavLink></li>
                            </ul>
                        </li>*/}
                    </ul>
                </div>
            </div>

            <footer className={styles.footer}>
                <br>
                </br>
                <p>Gallery</p>
                <p>Example street 7</p>
                <p>zip code</p>
                <p>Warsaw</p>
                <br/>
            </footer>
            <Routes>
                <Route path="/artist/:id" element={<ArtistPage/>}/>;
                <Route path="/work/:id" element={<WorkPage/>}/>;
                <Route path="/category/:type" element={<CategoryPage/>}/>;

            </Routes>
            <Outlet/>
        </>
    );
};
export default Browse;

