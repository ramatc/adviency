import { createContext, useContext, useState, useEffect } from "react";

const GiftContext = createContext([]);

export const useGiftContext = () => useContext(GiftContext);

const GiftContextProvider = ({ children }) => {

    const giftsLocalStorage = JSON.parse(localStorage.getItem('gifts') || '[]');
    
    const [gifts, setGifts] = useState(giftsLocalStorage);
    const [inputText, setText] = useState('');
    const [inputUrl, setUrl] = useState('');
    const [inputNumber, setNumber] = useState('');

    useEffect(() => {
        localStorage.setItem('gifts', JSON.stringify(gifts));
    }, [gifts]);

    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    const handleOnChangeUrl = (e) => {
        setUrl(e.target.value);
    }

    const handleOnChangeNumber = (e) => {
        setNumber(parseInt(e.target.value));
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();

        const lastId = gifts.length > 0 ? gifts[gifts.length - 1].id + 1 : 0;
        const index = gifts.map(gift => gift.name.toLowerCase().trim()).indexOf(inputText.toLowerCase().trim());

        inputText && index === -1  ? (
            setGifts([...gifts, {id: lastId, name: inputText, img: inputUrl, qty: inputNumber}]),
            setText(''),
            setUrl(''),
            setNumber('')
        ) : (
            gifts[index].qty += inputNumber,
            setText(''),
            setUrl(''),
            setNumber('')
        );
    }

    const handleOnDelete = (id) => {
        setGifts(gifts.filter(gift => gift.id !== id));
    }

    const handleOnDeleteAll = () => {
        confirm('¿Desea borrar la lista de regalos?') ? setGifts([]) : <></>; 
    }

    return (
        <GiftContext.Provider value={{
            gifts,
            inputText,
            inputUrl,
            inputNumber,
            handleOnChange,
            handleOnChangeUrl,
            handleOnChangeNumber,
            handleOnSubmit,
            handleOnDelete,
            handleOnDeleteAll
        }}>
            {children}
        </GiftContext.Provider>
    )
}

export default GiftContextProvider;