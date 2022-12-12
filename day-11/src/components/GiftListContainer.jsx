import { useGiftContext } from '../context/GiftContext';
import { AiFillGift } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';
import Form from './Form/Form';

const GiftListContainer = () => {

    const {gifts, handleOnDelete, handleOnDeleteAll} = useGiftContext();

    return (
        <>
            <div className='gifts-wrapper'>
                <h1>Regalos</h1>
                {
                    gifts.length === 0 
                    ?
                    <h2>No hay regalos! Agrega alguno!</h2>
                    :
                    <>
                        <ul>
                            {gifts.map((gift, i) =>
                                <li key={i} className='gift-container'>
                                    <div className='gift--container'>
                                        <img src={gift.img} alt={gift.name} className='gift-img'/> 
                                        <p>{gift.name} <span className='qty'>x{gift.qty}</span></p>
                                    </div>
                                    <button onClick={() => handleOnDelete(gift.id)}><BsFillTrashFill/></button>
                                </li>
                            )}
                        </ul>
                    </>
                }
            </div>

            <div className='btn-container'>
                <Form/>
                <button
                    onClick={handleOnDeleteAll}
                    className='btn-delete'
                >
                    Borrar todos
                </button>
            </div>
        </>
    )
}

export default GiftListContainer;