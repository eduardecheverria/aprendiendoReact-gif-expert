import useFetchGifs from '../hooks/useFetchGifs';
import '../styles.css';
import GifItem from './GifItem';
const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {isLoading && <h2>Cargando...</h2>}
            <ol className="card-grid">
                {images.map((image) => (
                    <GifItem key={image.id} {...image} />
                ))}
            </ol>
        </>
    );
};

export default GifGrid;
