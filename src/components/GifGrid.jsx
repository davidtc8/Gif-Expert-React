import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3> {category} </h3>
      {
        // si(?) loading existe regresa un ternario de caso contrario(:) ponlo como null
        isLoading ? (<h2>Cargando...</h2>) : null
      }      
      <div className="card-grid">
        {/* Images: estado que vas a iterar */}
        {/* image: es como si pusieras "i" es como la variable a iterar */}
        {images.map((image) => (
          <GifItem
            key={image.id}
            // Esparcimos el property de image para tener todas sus propiedades
            // y lo descomponemos en GifItem
            {...image}
          />
        ))}
      </div>
    </>
  );
};
