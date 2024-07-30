import {useParams} from 'react-router-dom';

const artists = [
    {
        id: 1,
        name: "Artist One",
        image: "path/to/image1.jpg",
        description: "Description of artist one."
    },
    {
        id: 2,
        name: "Artist Two",
        image: "path/to/image2.jpg",
        description: "Description of artist two."
    },
    {
        id: 3,
        name: "Artist Three",
        image: "path/to/image3.jpg",
        description: "Description of artist three."
    }
];

const ArtistPage = () => {
    const {id} = useParams();
    const artist = artists.find(artist => artist.id === parseInt(id));

    if (!artist) {
        return <div>Artist not found</div>;
    }

    return (
        <div>
            <h2>{artist.name}</h2>
            <img src={artist.image} alt={artist.name}/>
            <p>{artist.description}</p>
        </div>
    );
};


export default ArtistPage;