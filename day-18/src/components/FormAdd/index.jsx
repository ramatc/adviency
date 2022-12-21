import { useState } from 'react';
import { useGiftContext } from "../../context/GiftContext";
import './styles.css';

const FormAdd = () => {

    const {data, handleInputChange, handleSubmit, handleClear, handleRandom} = useGiftContext();
        
    const [modal, setModal] = useState(false); 

    const handleModal = () => {
        setModal(!modal);
        handleClear();
    };

    modal ? document.body.classList.add('active-modal') : document.body.classList.remove('active-modal');
        
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
                            onSubmit={handleSubmit}
                        >   
                            <div className='form-input d-flex'>
                                <label htmlFor='name'>Regalo:</label>
                                <input
                                    type='text'
                                    name='name'
                                    value={data.name}
                                    onChange={handleInputChange}
                                    placeholder='Remera negra'
                                    required
                                />
                                <button
                                    onClick={handleRandom}
                                    className='btn-random'
                                    type='button'
                                >
                                    Sorprendeme!
                                </button>
                            </div>

                            <div className='form-input'>
                                <label htmlFor='price'>Precio:</label>
                                <input
                                    type='number'
                                    name='price'
                                    value={data.price}
                                    onChange={handleInputChange}
                                    placeholder='$100'
                                    required
                                />
                            </div>

                            <div className='form-input'>
                                <label htmlFor='url'>Imagen:</label>
                                <input
                                    type='text'
                                    name='url'
                                    value={data.url}
                                    onChange={handleInputChange}
                                    placeholder='http://images.com/remera.png'
                                    required
                                />
                            </div>
                            
                            <div className='form-input'>
                                <label htmlFor='receiver'>Destinatario:</label>
                                <input
                                    type='text'
                                    name='receiver'
                                    value={data.receiver}
                                    onChange={handleInputChange}
                                    placeholder='Juan Perez'
                                    required
                                />
                            </div>

                            <div className='form-input'>
                                <label htmlFor='number'>Cantidad:</label>
                                <input
                                    type='number'
                                    name='number'
                                    min={1}
                                    max={1000}
                                    value={data.number}
                                    onChange={handleInputChange}
                                    placeholder='3'
                                    required
                                />
                            </div>

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

export default FormAdd;