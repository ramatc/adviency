import { useGiftContext } from '../../context/GiftContext';
import { BsFillTrashFill } from 'react-icons/bs';
import Form from '../FormAdd';
import FormEdit from '../FormEdit';

const GiftListContainer = () => {

    const {gifts, handleDelete, handleDeleteAll} = useGiftContext();

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
                                <li key={i} className='gift-card'>
                                    <div className='gift--card'>
                                        <img src={gift.img} alt={gift.name} className='gift-img'/> 
                                        <div>
                                            <p>{gift.name} <span className='qty'>x{gift.qty}</span></p>
                                            <p className='gift-receiver'>Para: {gift.receiver}</p>
                                        </div>
                                    </div>
                                    <div className='gift--card'>
                                        <FormEdit gift={gift}/>
                                        <button onClick={() => handleDelete(gift.id)} className='btn-gift'><BsFillTrashFill/></button>
                                    </div>
                                </li>
                            )}
                        </ul>
                    </>
                }
            </div>

            <div className='btn-container'>
                <Form/>
                <button
                    onClick={handleDeleteAll}
                    className='btn-delete'
                >
                    Borrar todos
                </button>
            </div>
        </>
    )
}

export default GiftListContainer;