import { createContext, useContext, useState } from 'react';

const GiftContext = createContext([]);

export const useGiftContext = () => useContext(GiftContext);

const GiftContextProvider = ( {children} ) => {

    const [gifts, setGifts] = useState([{id: 0, name: 'Caramelos'}, {id: 1, name: 'Medias'}, {id: 2, name: 'Vitel Tone'}]);
    const [inputValue, setInputValue] = useState('');

    const handleOnChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();

        const lastId = gifts.length > 0 ? gifts[gifts.length - 1].id + 1 : 0;
        const giftInclude = gifts.some(gift => gift.name.toLowerCase() === inputValue.toLowerCase());

        inputValue && !giftInclude  ? (
            setGifts([...gifts, {id: lastId, name: inputValue}]),
            setInputValue('')
        ) : (
            alert("El regalo ya se encuentra en la lista")
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
            inputValue,
            handleOnChange,
            handleOnSubmit,
            handleOnDelete,
            handleOnDeleteAll
        }}>
            {children}
        </GiftContext.Provider>
    )
}

export default GiftContextProvider;