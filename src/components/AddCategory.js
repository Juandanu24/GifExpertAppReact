import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Submit hecho');
        if( inputValue.trim().length > 2){
            setCategories( [inputValue]);/*cats => [inputValue, cats] esto en caso de que queramos mantener el historial*/
            setInputValue('');
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <input
            type='text'
            placeholder='Escribe tu personaje'
            value={inputValue}
            onChange={handleInputChange}
        />
    </form>
  )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}