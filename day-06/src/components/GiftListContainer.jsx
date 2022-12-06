import React from 'react'
import Form from './Form';
import { useGiftContext } from '../context/GiftContext';
import { AiFillGift } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';

const Home = () => {

    const {gifts, handleOnDelete} = useGiftContext();

    return (
        <>
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
                <Form/>
        </>
    )
}

export default Home;