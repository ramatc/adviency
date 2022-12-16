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
    const [inputNumber, setNumber] = useState(1);

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
        setNumber(e.target.value);
    }

    const handleClear = () => {
        setText(''),
        setUrl(''),
        setReceiver(''),
        setNumber(1)
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
            gifts[index].qty += parseInt(inputNumber),
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

    const handleRandom = () => {

        const randomGifts = [
            {name: 'PS5', img: 'https://arsonyb2c.vtexassets.com/arquivos/ps5.png'},
            {name: 'Milanesa', img: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Weekend_in_Buenos_Aires.jpg'},
            {name: 'Mouse inalámbrico', img: 'https://http2.mlstatic.com/D_NQ_NP_633704-MLA48267038056_112021-O.webp'},
            {name: 'Chaleco', img: 'https://static.zara.net/photos///2022/S/0/2/p/5320/330/500/2/w/560/5320330500_6_1_1.jpg?ts=1655218828433'},
            {name: 'Planchita de pelo', img: 'https://hendel-r7d8odghj1.stackpathdns.com/media/catalog/product/cache/0c3e9ac8430b5a3e77d1544ae1698a10/3/9/39615.jpg'},
            {name: 'Caramelos', img: 'https://cdn11.bigcommerce.com/s-abmjjefojj/images/stencil/1280x1280/products/3173/13104/Flyn-Paff-Tutti-Frutti-Argentina_Select-1000x1000__81262.1607614117.jpg?c=1'}
        ];

        const random = Math.floor(Math.random() * randomGifts.length);
        const {name: randomName, img: randomImg} = randomGifts[random];

        setText(randomName);
        setUrl(randomImg);
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
            handleDeleteAll,
            handleRandom
        }}>
            {children}
        </GiftContext.Provider>
    )
}

export default GiftContextProvider;