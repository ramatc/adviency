import React, { useState } from 'react';
import { AiFillGift } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs'
import './App.css';

function App() {
    const [gifts, setGifts] = useState([{id: 0, name: "Caramelos"}, {id: 1, name: "Medias"}, {id: 2, name: "Vitel Tone"}]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();

        const lastId = gifts.length > 0 ? gifts[gifts.length - 1].id + 1 : 0;

        if(inputValue){
            setGifts([...gifts, {id: lastId, name: inputValue}]);
            setInputValue('');
        }
    }

    const handleDelete = (id) => {
        setGifts(gifts.filter(gift => gift.id !== id));
    }

    return (
        <div className="App">
            <div className='gifts-wrapper'>
                <h1>Regalos</h1>
                <ul>
                    {
                        gifts.length === 0
                        ?
                        <h2>NO HAY REGALOS</h2>
                        :
                        gifts.map((gift, i) => 
                        <div key={i} className='gift-container'>
                            <li><AiFillGift/> {gift.name}</li>
                            <button onClick={() => handleDelete(gift.id)}><BsFillTrashFill/></button>
                        </div>
                        )
                    }
                </ul>
            </div>

            <form onSubmit={handleOnSubmit}>
                <input
                    type='text'
                    value={inputValue}
                    placeholder='Ingresé un regalo...'
                    onChange={handleInputChange}
                    required
                />
                <button>
                    Agregar regalo
                </button>
            </form>
        </div>
    )
}

export default App;