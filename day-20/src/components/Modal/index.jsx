import { useState } from 'react';

const FormAdd = ({gifts}) => {

    const [modal, setModal] = useState(false); 

    const handleModal = () => {
        setModal(!modal);
    };

    modal ? document.body.classList.add('active-modal') : document.body.classList.remove('active-modal');
        
    return (
        <>
            <button
                onClick={handleModal}
                className='btn-prev'
            >
                Previsualizar
            </button>

            {modal && (
                <div className="modal">
                    <div onClick={handleModal} className="overlay"></div>
                    <div className="modal-content">
                        <h1 className='title-comprar'>Comprar:</h1>

                        <section>
                            {gifts.map(gift => 
                                <article className='gift-card j-left'>
                                    <img src={gift.img} alt={gift.name} className='gift-img'/> 
                                    <div className='gift-list'>
                                        <p>{gift.name}<span className='qty'> x{gift.qty}</span></p>
                                        <p className='gift-receiver'>Para: {gift.receiver}</p>
                                    </div>
                                </article>    
                            )}
                        </section>

                        <button
                            type='button'
                            onClick={handleModal}
                            className='btn-close'
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default FormAdd;