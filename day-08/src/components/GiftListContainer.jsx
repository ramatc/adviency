import Form from "./Form";
import { useGiftContext } from '../context/GiftContext';
import { AiFillGift } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';

const GiftListContainer = () => {

    const { gifts, handleOnDelete, handleOnDeleteAll} = useGiftContext();

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
                                    <p><AiFillGift/> {gift.name} <span className="qty">x{gift.qty}</span></p>
                                    <button onClick={() => handleOnDelete(gift.id)}><BsFillTrashFill/></button>
                                </li>
                            )}
                        </ul>
                        <button
                            type='button'
                            onClick={handleOnDeleteAll}
                            className='btn-delete'
                        >
                            Borrar todos
                        </button>
                    </>
                }
            </div>
            <Form/>
        </>
    )
}

export default GiftListContainer;