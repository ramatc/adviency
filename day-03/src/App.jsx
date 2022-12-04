import React, { useState } from 'react';
import { AiFillGift } from "react-icons/ai";
import './App.css';

function App() {
    const [gifts, setGifts] = useState(['Medias', 'Caramelos', 'Vitel Tone']);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value); 
    }

    const handleOnClick = (e) => {
        e.preventDefault();

        if(inputValue){
            setGifts([...gifts, inputValue]);
            setInputValue("");
        }
    }
    
    return (
        <div className="App">
            <div className='gifts-wrapper'>
                <h1>Regalos</h1>
                <ul>
                    {gifts.map((gift, i) => 
                        <li key={i}><AiFillGift/> {gift}</li>
                    )}
                </ul>
            </div>
            <form onSubmit={handleOnClick}>
                <input
                    value={inputValue}
                    onChange={handleInputChange}
                    type='text'
                    placeholder='Ingresé un regalo...'
                    required
                />
                <button>Agregar regalo</button>
            </form>
        </div>
    )
}

export default App
