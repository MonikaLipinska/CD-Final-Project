import {useParams} from "react-router-dom";
import styles from "@/styles/ArtistPage.module.scss";

import monroe from "@/photo/monroe.jpeg";
import AE2 from "@/photo/AE2.png";
import dali from "@/photo/dali.jpeg";
import obraz1 from "@/photo/obraz1.jpg";
import obraz2 from "@/photo/obraz2.jpg";
import obraz3 from "@/photo/obraz3.jpg";
import obraz9 from "@/photo/obraz9.jpeg";
import obraz8 from "@/photo/obraz8.jpeg";


const artists = [
    {
        id: 1,
        name: "One",
        image: AE2,
        description: "Opis/Description",
        thumbnails: [obraz9, obraz1, obraz2, obraz3, obraz8]
    },
    {
        id: 2,
        name: "Two",
        image: monroe,
        description: "Opis/Description",
        thumbnails: [obraz1, obraz2, obraz3]
    },
    {
        id: 3,
        name: "Three",
        image: dali,
        description: "Opis/Description",
        thumbnails: [obraz1, obraz2, obraz3]
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

    return (
        <div className={styles.artistPage}>
            {/*<select value={id} onChange={handleArtistChange}>
                {artists.map(artist => (
                    <option key={artist.id} value={artist.id}>{artist.name}</option>
                ))}
            </select>*/}
            <h2 className={styles.artistTitle}>{artist.name}</h2>
            <img className={styles.artistImage} src={artist.image} alt={artist.name}/>
            <p className={styles.artistDescription}>{artist.description}</p>

            <div className={styles.thumbnailContainer}>
                {artist.thumbnails.map((thumbnail, index) => (
                    <img key={index} className={styles.thumbnail} src={thumbnail}
                         alt={`${artist.name} thumbnail ${index + 1}`}/>
                ))}
            </div>

        </div>
    );
};


export default ArtistPage;