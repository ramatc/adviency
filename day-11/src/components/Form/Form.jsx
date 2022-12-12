import { useState } from 'react';
import { useGiftContext } from "../../context/GiftContext";
import './styles.css';

const Form = () => {

    const [modal, setModal] = useState(false); 

    const handleModal = () => {
        setModal(!modal);
    };

    modal ? document.body.classList.add('active-modal') : document.body.classList.remove('active-modal');
    
    const {inputText, inputUrl, inputNumber, handleOnSubmit, handleOnChange, handleOnChangeUrl, handleOnChangeNumber} = useGiftContext();

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
                                className='input-text'
                                name='name'
                                value={inputText}
                                onChange={handleOnChange}
                                placeholder='Remera negra'
                                required
                            />

                            <label htmlFor='url'>Imagen:</label>
                            <input
                                type='text'
                                className='input-url'
                                name='url'
                                value={inputUrl}
                                onChange={handleOnChangeUrl}
                                placeholder='http://images.com/remera.png'
                                required
                            />

                            <label htmlFor='number'>Cantidad:</label>
                            <input
                                type='number'
                                className='input-number'
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