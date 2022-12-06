import React from 'react';
import { useGifts } from './hooks/useGifts';
import { AiFillGift } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';
import './App.css';

const App = () => {

    const {gifts, inputValue, handleOnChange, handleOnSubmit, handleOnDelete, handleOnDeleteAll} = useGifts();

    return (
        <div className="App">
            <div className='gifts-wrapper'>
                <h1>Regalos</h1>
                {
                    gifts.length === 0 
                    ?
                    <h2>No hay regalos! Agrega algo!</h2>
                    :
                    <ul>
                    {
                        gifts.map((gift, i) => 
                        <li key={i} className='gift-container'>
                            <p><AiFillGift/> {gift.name}</p>
                            <button onClick={() => handleOnDelete(gift.id)}><BsFillTrashFill/></button>
                        </li>
                    )}
                    </ul>
                }
            </div>

            <form onSubmit={handleOnSubmit}>
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
        </div>
    )
}

export default App;
