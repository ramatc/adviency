import { createContext, useContext, useState, useEffect } from 'react';

const GiftContext = createContext([]);

export const useGiftContext = () => useContext(GiftContext);

const GiftContextProvider = ({ children }) => {
    
    const [gifts, setGifts] = useState(() => JSON.parse(localStorage.getItem('gifts') || '[]'));
    const [loading, setLoading] = useState(true);

    const getFetch = new Promise((resolve) => {
        setTimeout( () => {
            resolve(gifts)
        }, 2000)
    });
    
    useEffect(() => {
        getFetch
            .then(res => setGifts(res))
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    }, []);

    const [inputText, setText] = useState('');
    const [inputUrl, setUrl] = useState('');
    const [inputReceiver, setReceiver] = useState('');
    const [inputNumber, setNumber] = useState('');

    useEffect(() => {
        localStorage.setItem('gifts', JSON.stringify(gifts));
    }, [gifts]);

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleChangeUrl = (e) => {
        setUrl(e.target.value);
    }

    const handleChangeReceiver = (e) => {
        setReceiver(e.target.value);
    }

    const handleChangeNumber = (e) => {
        setNumber(parseInt(e.target.value));
    }

    const handleClear = () => {
        setText(''),
        setUrl(''),
        setReceiver(''),
        setNumber('')
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const ids = gifts.map(gift => gift.id);
        const maxId = Math.max(...ids) + 1;
        const giftId = gifts.length > 0 ? maxId : 0;
        const index = gifts.findIndex(gift => gift.name.toLowerCase().trim() === inputText.toLowerCase().trim());
        
        inputText && index === -1  ? (
            setGifts([...gifts, {id: giftId, name: inputText, img: inputUrl, receiver: inputReceiver, qty: inputNumber}]),
            handleClear()
        ) : (
            gifts[index].qty += inputNumber,
            handleClear()
        );
    }

    const handleSubmitEdit = (e) => {
        e.preventDefault();

        const index = gifts.map(gift => gift.id).indexOf(parseInt(e.target.id.value));
        const GIFT_ID = parseInt(e.target.id.value);

        gifts.splice(index, 1);

        setGifts([...gifts, {id: GIFT_ID, name: inputText, img: inputUrl, receiver: inputReceiver, qty: inputNumber}]);
    }

    const handleEdit = ({name, img, receiver, qty}) => {
        setText(name);
        setUrl(img);
        setReceiver(receiver);
        setNumber(qty);
    }

    const handleDelete = (id) => {
        setGifts(gifts.filter(gift => gift.id !== id));
    }

    const handleDeleteAll = () => {
        confirm('¿Desea borrar la lista de regalos?') ? setGifts([]) : <></>; 
    }

    return (
        <GiftContext.Provider value={{
            gifts,
            inputText,
            inputUrl,
            inputReceiver,
            inputNumber,
            loading,
            handleChange,
            handleChangeUrl,
            handleChangeReceiver,
            handleChangeNumber,
            handleClear,
            handleSubmit,
            handleSubmitEdit,
            handleEdit,
            handleDelete,
            handleDeleteAll
        }}>
            {children}
        </GiftContext.Provider>
    )
}

export default GiftContextProvider;