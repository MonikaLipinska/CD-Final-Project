import "@/styles/Browse.module.scss";

const Browse = () => {


    return (
        <div className="browse">
            <h2>Browse</h2>
            <ul>
                <li>Artist
                    <ul>
                        <li>Artist 1</li>
                        <li>Artist 2</li>
                        <li>Artist 3</li>
                    </ul>
                </li>
                <li>Work
                    <ul>
                        <li>Work 1</li>
                        <li>Work 2</li>
                        <li>Work 3</li>
                    </ul>
                </li>
                <li>Category
                    <ul>
                        <li>Paintings</li>
                        <li>Graphics</li>
                        <li>Photos</li>
                    </ul>
                </li>
                <li>Favorites
                    <ul>
                        <li>Favorite 1</li>
                        <li>Favorite 2</li>
                        <li>Favorite 3</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default Browse;

