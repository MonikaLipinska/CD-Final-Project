import {useParams} from 'react-router-dom';

const categories = {
    paintings: [
        {
            id: 1,
            title: "Painting One",
            image: "path/to/painting1.jpg",
            description: "Description of painting one.",
            author: "Author One"
        },
        {
            id: 2,
            title: "Painting Two",
            image: "path/to/painting2.jpg",
            description: "Description of painting two.",
            author: "Author Two"
        }
    ],
    graphics: [
        {
            id: 1,
            title: "Graphic One",
            image: "path/to/graphic1.jpg",
            description: "Description of graphic one.",
            author: "Author Three"
        },
        {
            id: 2,
            title: "Graphic Two",
            image: "path/to/graphic2.jpg",
            description: "Description of graphic two.",
            author: "Author Four"
        }
    ],
    photos: [
        {
            id: 1,
            title: "Photo One",
            image: "path/to/photo1.jpg",
            description: "Description of photo one.",
            author: "Author Five"
        },
        {
            id: 2,
            title: "Photo Two",
            image: "path/to/photo2.jpg",
            description: "Description of photo two.",
            author: "Author Six"
        }
    ]
};

const CategoryPage = () => {
    const {type} = useParams();
    const category = categories[type];

    if (!category) {
        return <div>Category not found</div>;
    }

    return (
        <div>
            <h2>{type.charAt(0).toUpperCase() + type.slice(1)}</h2>
            <div>
                {category.map(item => (
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                        <img src={item.image} alt={item.title}/>
                        <p>{item.description}</p>
                        <p><strong>Author:</strong> {item.author}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryPage;