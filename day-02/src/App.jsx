import { useState } from 'react';
import { AiFillGift } from "react-icons/ai";
import './App.css';

function App() {

    const [gifts] = useState(["Medias", "Caramelos", "Vitel Tone"]);

    return (
        <main>
            <div className='gifts-wrapper'>
                <h1>Regalos</h1>
                <ul>
                    {gifts.map(gift => 
                        <li key={gift}> <AiFillGift/> {gift} </li>
                    )}
                </ul>
            </div>
        </main>
    )
}

export default App
