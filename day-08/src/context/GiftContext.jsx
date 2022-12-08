import { createContext, useContext, useState } from "react";

const GiftContext = createContext([]);

export const useGiftContext = () => useContext(GiftContext);

const GiftContextProvider = ({ children }) => {
    
    const [gifts, setGifts] = useState([{id: 0, name: 'Caramelos', qty: 3}, {id: 1, name: 'Medias', qty: 6}, {id: 2, name: 'Vitel Tone', qty: 2}]);
    const [inputText, setText] = useState('');
    const [inputNumber, setNumber] = useState('');

    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    const handleOnChangeNumber = (e) => {
        setNumber(parseInt(e.target.value));
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();

        const lastId = gifts.length > 0 ? gifts[gifts.length - 1].id + 1 : 0;
        const index = gifts.map(gift => gift.name.toLowerCase().trim()).indexOf(inputText.toLowerCase().trim());

        inputText && index === -1  ? (
            setGifts([...gifts, {id: lastId, name: inputText, qty: inputNumber}]),
            setText(''),
            setNumber('')
        ) : (
            gifts[index].qty += inputNumber,
            setText(''),
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
            inputNumber,
            handleOnChange,
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