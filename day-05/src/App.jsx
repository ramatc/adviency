import React from 'react';
import { useGifts } from './hooks/useGifts';
import { AiFillGift } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';
import './App.css';

function App() {

    const {gifts, inputValue, handleOnChange, handleOnSubmit, handleOnDelete, handleOnDeleteAll} = useGifts();

    return (
        <div className="App">
            <div className='gifts-wrapper'>
                <h1>Regalos</h1>
                {
                    gifts.length === 0 
                    ?
                    <h2>NO HAY REGALOS</h2>
                    :
                    <ul>
                        {gifts.map((gift, i) => 
                            <div key={i} className='gift-container'>
                                <li><AiFillGift/> {gift.name}</li>
                                <button onClick={() => handleOnDelete(gift.id)}><BsFillTrashFill/></button>
                            </div>
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

export default App
