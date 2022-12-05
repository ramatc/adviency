import {useState} from 'react';

export const useGifts = () => {

    const [gifts, setGifts] = useState([{id: 0, name: "Caramelos"}, {id: 1, name: "Medias"}, {id: 3, name: "Vitel Tone"}]);
    const [inputValue, setInputValue] = useState('');   

    const handleOnChange = (e) => {
        setInputValue(e.target.value);
    }
    
    const handleOnSubmit = (e) => {
        e.preventDefault();
    
        const lastId = gifts.length > 0 ? gifts[gifts.length - 1].id + 1 : 0;
    
        if(inputValue){
            setGifts([...gifts, {id: lastId, name: inputValue}])
            setInputValue('');
        }
    }
    
    const handleOnDelete = (id) => {
        setGifts(gifts.filter(gift => gift.id !== id));
    }

    const handleOnDeleteAll = () => {
        confirm("¿Desea borrar la lista de regalos?") ? setGifts([]) : <></>;
    }

    return {
        gifts,
        inputValue,
        handleOnChange,
        handleOnSubmit,
        handleOnDelete,
        handleOnDeleteAll
    }
}