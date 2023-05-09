import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

// Un hook no es mas que una funcion
export const useFetchGifs = ( category ) => {
  // estado local
  const [images, setImages] = useState([]);
  const [isLoading, setisLoading] = useState( true )

  const getImages = async() => {
    const newImages = await getGifs( category );
    setImages(newImages)
    setisLoading(false);
  }
  // Useeffect es para disparar un efecto
  useEffect(() => {
    getImages();

    // Este empty string significa que solo se va triggerear una vez el useEffect al renderizar el HTML
  }, []);

  return {
    images: images,
    isLoading
  };
};
