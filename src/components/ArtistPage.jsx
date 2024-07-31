import {useParams} from "react-router-dom";
import styles from "@/styles/ArtistPage.module.scss";


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


const ArtistPage = () => {
    const {id} = useParams();
    {/*const navigate = useNavigate();*/
    }
    const artist = artists.find(artist => artist.id === parseInt(id));

    if (!artist) {
        return <div>Artist not found</div>;
    }


    {/*const handleArtistChange = (e) => {
        const selectedId = e.target.value;
        navigate(`/browse/artist/${selectedId}`);
    };*/
    }

    return (
        <div className={styles.ArtistPage}>
            {/*<select value={id} onChange={handleArtistChange}>
                {artists.map(artist => (
                    <option key={artist.id} value={artist.id}>{artist.name}</option>
                ))}
            </select>*/}
            <h2 className={styles.artistTitle}>{artist.name}</h2>
            <img className={styles.artistImage} src={artist.image} alt={artist.name}/>
            <p className={styles.artistDescription}>{artist.description}</p>
        </div>
    );
};


export default ArtistPage;