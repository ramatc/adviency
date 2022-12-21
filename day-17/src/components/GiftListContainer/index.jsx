import Form from '../FormAdd';
import GiftList from '../GiftList';
import Loading from '../Loading'
import { useGiftContext } from '../../context/GiftContext';

const GiftListContainer = () => {

    const {gifts, loading, handleDeleteAll} = useGiftContext();

    return (
        <>
            {loading ? <Loading/> :
                <>
                    <div className='gifts-wrapper'>
                        <h1>Regalos</h1>
                        {
                            gifts.length === 0 
                            ?
                            <h2>No hay regalos! Agrega alguno!</h2>
                            :
                            <GiftList gifts={gifts}/>
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
            }
        </>
    )
}

export default GiftListContainer;