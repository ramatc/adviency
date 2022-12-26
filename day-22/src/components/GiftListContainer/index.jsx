import FormAdd from '../Form/FormAdd';
import GiftList from '../GiftList';
import Modal from '../Modal'
import Loading from '../Loading'
import { BsFillVolumeUpFill, BsFillVolumeMuteFill } from "react-icons/bs";
import { useGiftContext } from '../../context/GiftContext';

import audio from '../../assets/audios/navidad.mp3';

const GiftListContainer = () => {

    const {gifts, loading, totalPrice, playAudio, handleAudio, handleDeleteAll} = useGiftContext();

    return (
        <>
            {loading ? <Loading/> :
                <>
                    <div className='gifts-wrapper'>
                        <div className='gift-title'>
                            <h1>Regalos:</h1>
                            <audio src={audio} preload='auto' hidden/>
                            <button
                                onClick={handleAudio}
                                className='audio-btn'
                            >
                                {playAudio ? <BsFillVolumeUpFill/> : <BsFillVolumeMuteFill/>}
                            </button>
                        </div>
                        {
                            gifts.length === 0 
                            ?
                            <h2>No hay regalos! Agrega alguno!</h2>
                            :
                            <>
                                <GiftList gifts={gifts}/>
                                <p className='total-price'>Total: ${totalPrice}</p>
                            </>
                        }
                    </div>
                    <div className='btn-container'>
                        <FormAdd/>
                        <Modal gifts={gifts}/>
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