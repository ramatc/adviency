import FormEdit from '../Form/FormEdit';
import FormDuplicate from '../Form/FormDuplicate';
import { useGiftContext } from '../../context/GiftContext'
import { BsFillTrashFill } from 'react-icons/bs';


const Gift = ({gift}) => {

    const {img, name, price, qty, receiver, id} = gift;
    const {handleDelete} = useGiftContext();

    return (
        <li className='gift-card'>
            <div className='gift--card'>
                <img src={img} alt={name} className='gift-img'/> 
                <div>
                    <p>{name}<span className='qty'> x{qty}</span></p>
                    <span className='price'>${price * qty}</span>
                    <p className='gift-receiver'>Para: {receiver}</p>
                </div>
            </div>
            <div className='gift--card'>
                <FormDuplicate gift={gift}/>
                <FormEdit gift={gift}/>
                <button onClick={() => handleDelete(id)} className='btn-gift'><BsFillTrashFill/></button>
            </div>
        </li>
    )
}

export default Gift;