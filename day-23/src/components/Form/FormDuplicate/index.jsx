import { useState } from 'react';
import { BiDuplicate } from 'react-icons/bi';
import { useGiftContext } from '../../../context/GiftContext';

const FormDuplicate = ({gift}) => {

    const {data, handleInputChange, handleEdit, handleSubmit} = useGiftContext();

    const [modal, setModal] = useState(false); 

    const handleModal = () => {
        setModal(!modal);
        handleEdit(gift);
    };

    const handleCloseEdit = () => {
        setTimeout(() => {
            setModal(!modal)
        }, 100);
    }

    modal ? document.body.classList.add('active-modal') : document.body.classList.remove('active-modal');
    
    return (
        <>
            <button
                onClick={handleModal}
                className='btn-gift'
            >
                <BiDuplicate/>
            </button>

            {modal && (
                <div className='modal'>
                    <div onClick={handleModal} className='overlay'></div>
                    <div className='modal-content'>
                        <form
                            onSubmit={handleSubmit}
                        >   
                            <div className='form-input'>
                                <label htmlFor='name'>Regalo:</label>
                                <input
                                    type='text'
                                    name='name'
                                    value={data.name}
                                    onChange={handleInputChange}
                                    placeholder='Remera negra'
                                    required
                                    />
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

                            <input
                                type='number'
                                value={gift.id}
                                name='id'
                                readOnly
                                className='input-id'
                            />

                            <div className='form-btn btn-container'>
                                <button
                                    type='submit'
                                    className='btn--add'
                                >
                                    <span
                                        onClick={handleCloseEdit}
                                    >
                                        Agregar
                                    </span>
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

export default FormDuplicate;