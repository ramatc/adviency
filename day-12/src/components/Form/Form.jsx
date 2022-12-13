import { useState } from 'react';
import { useGiftContext } from "../../context/GiftContext";
import './styles.css';

const Form = () => {

    const [modal, setModal] = useState(false); 

    const handleModal = () => {
        setModal(!modal);
    };

    modal ? document.body.classList.add('active-modal') : document.body.classList.remove('active-modal');
    
    const {inputText, inputUrl, inputReceiver, inputNumber, handleOnSubmit, 
        handleOnChange, handleOnChangeUrl, handleOnChangeReceiver, handleOnChangeNumber} = useGiftContext();

    return (
        <>
            <button
                onClick={handleModal}
                className='btn-add'
                >
                Agregar regalo
            </button>

            {modal && (
                <div className="modal">
                    <div onClick={handleModal} className="overlay"></div>
                    <div className="modal-content">
                        <form
                            onSubmit={handleOnSubmit}
                        >   
                            <label htmlFor='name'>Regalo:</label>
                            <input
                                type='text'
                                name='name'
                                value={inputText}
                                onChange={handleOnChange}
                                placeholder='Remera negra'
                                required
                            />

                            <label htmlFor='url'>Imagen:</label>
                            <input
                                type='text'
                                name='url'
                                value={inputUrl}
                                onChange={handleOnChangeUrl}
                                placeholder='http://images.com/remera.png'
                                required
                            />

                            <label htmlFor='receiver'>Destinatario:</label>
                            <input
                                type='text'
                                name='receiver'
                                value={inputReceiver}
                                onChange={handleOnChangeReceiver}
                                placeholder='Juan Perez'
                                required
                            />

                            <label htmlFor='number'>Cantidad:</label>
                            <input
                                type='number'
                                name='number'
                                min={1}
                                max={1000}
                                value={inputNumber}
                                onChange={handleOnChangeNumber}
                                placeholder='3'
                                required
                            />

                            
                            <div className='form-btn'>
                                <button
                                    type='submit'
                                    className='btn--add'
                                >
                                    Agregar
                                </button>

                                <button
                                    type='button'
                                    onClick={handleModal}
                                    className='btn--close'
                                >
                                    Cerrar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}

export default Form;