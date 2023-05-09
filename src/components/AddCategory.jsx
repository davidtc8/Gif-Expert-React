import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        // Esto es para que no se refreshee el browser cada vez que doy enter
        event.preventDefault()
        // si el input value no tiene nada escrito, salte de esta funcion
        if( inputValue.trim().length <=1) return;
        // Hacemos un callback donde tenemos las categorias anteriores e insertamos
        // el nuevo input value, mas las categorias anteriores
        // setCategories( categories => [inputValue, ...categories])
        onNewCategory( inputValue.trim() )
        setInputValue('')
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
            type="text"
            placeholder="Search gifs"
            value={ inputValue }
            onChange= { onInputChange }
            />
        </form>
    )
}
