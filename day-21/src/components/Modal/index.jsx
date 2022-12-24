import { useState } from 'react';

const FormAdd = ({gifts}) => {

    const [modal, setModal] = useState(false); 

    const handleModal = () => {
        setModal(!modal);
    };

    function printPage() {
        document.getElementById('print-button').style.display = 'none';
        window.print();
        document.getElementById('print-button').style.display = 'flex';
    }

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
                        <div id='print-page'>
                            <h1 className='title-comprar'>Comprar:</h1>
                            <section>
                                {gifts.map((gift, i) => 
                                    <article className='gift-card j-left' key={i}>
                                        <img src={gift.img} alt={gift.name} className='gift-img'/> 
                                        <div className='gift-list'>
                                            <p>{gift.name}<span className='qty'> x{gift.qty}</span></p>
                                            <p className='gift-receiver'>Para: {gift.receiver}</p>
                                        </div>
                                    </article>    
                                )}
                            </section>
                        </div>
                        
                        <div className='btn-list' id='print-button'>
                            <button
                                type='button'
                                onClick={handleModal}
                                className='btn-close'
                                >
                                Cerrar
                            </button>

                            <button
                                type='button'
                                className='btn-close'
                                onClick={printPage}
                            >
                                Imprimir
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default FormAdd;