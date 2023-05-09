import React from "react";
import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    // si el useState de Categories incluye la nueva categoria, si lo tiene, salte de la funcion
    if (categories.includes(newCategory)) return;
    // Estoy haciendo una copia de categorias y agrego el nuevo valor
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* input */}
      <AddCategory
        onNewCategory={(event) => onAddCategory(event)}
        currentCategories={categories}
      />

      {/* Listado de gifs */}
      {categories.map((category) => {
        return <GifGrid 
                    key={category} 
                    category={category} 
                />;
      })}
      {/* Gif Item */}
    </>
  );
};
