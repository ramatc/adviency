import { createContext, useContext, useState, useEffect } from "react";

const GiftContext = createContext([]);

export const useGiftContext = () => useContext(GiftContext);

const GiftContextProvider = ({ children }) => {

    const giftsLocalStorage = JSON.parse(localStorage.getItem('gifts') || '[]');
    
    const [gifts, setGifts] = useState(giftsLocalStorage);
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

        const lastId = gifts.reduce((acc, curr) => acc + curr.id, 1);
        const giftId = gifts.length > 0 ? lastId : 0;
        const index = gifts.map(gift => gift.name.toLowerCase().trim()).indexOf(inputText.toLowerCase().trim());

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