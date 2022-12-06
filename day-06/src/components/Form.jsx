import React from 'react';
import { useGiftContext } from '../context/GiftContext';

const Form = () => {

    const {inputValue, handleOnChange, handleOnSubmit, handleOnDeleteAll} = useGiftContext();

    return (
        <form 
            onSubmit={handleOnSubmit}
        >
            <input
                type='text'
                value={inputValue}
                onChange={handleOnChange}
                placeholder='Ingresé un regalo...'
                required
            />
            <button
                type='submit'
            >
                Agregar regalo
            </button>
            <button
                type='button'
                onClick={handleOnDeleteAll}
                className='btn-delete'
            >
                Borrar todos
            </button>
        </form>
    )
}

export default Form;