import {useParams} from 'react-router-dom';

const works = [
    {
        id: 1,
        title: "Work One",
        image: "path/to/work1.jpg",
        description: "Description of work one."
    },
    {
        id: 2,
        title: "Work Two",
        image: "path/to/work2.jpg",
        description: "Description of work two."
    },
    {
        id: 3,
        title: "Work Three",
        image: "path/to/work3.jpg",
        description: "Description of work three."
    }
];

const WorkPage = () => {
    const {id} = useParams();
    const work = works.find(work => work.id === parseInt(id));
    const [isFavorite, setIsFavorite] = useState(false);

    if (!work) {
        return <div>Work not found</div>;
    }

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div>
            <h2>{work.title}</h2>
            <img src={work.image} alt={work.title}/>
            <p>{work.description}</p>
            <button onClick={handleFavoriteClick}>
                {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
        </div>
    );
};

export default WorkPage;
