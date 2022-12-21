import { createContext, useContext, useState, useEffect } from 'react';

const GiftContext = createContext([]);

export const useGiftContext = () => useContext(GiftContext);

const GiftContextProvider = ({ children }) => {
    
    const [gifts, setGifts] = useState(() => JSON.parse(localStorage.getItem('gifts') || '[]'));
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({
        name: '',
        price: '',
        url: '',
        receiver: '',
        number: 1
    })

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

    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        localStorage.setItem('gifts', JSON.stringify(gifts));
    }, [gifts]);

    const handleClear = () => {
        setData({
            name: '',
            price: '',
            url: '',
            receiver: '',
            number: 1
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const ids = gifts.map(gift => gift.id);
        const maxId = Math.max(...ids) + 1;
        const giftId = gifts.length > 0 ? maxId : 0;
        const index = gifts.findIndex(gift => gift.name.toLowerCase().trim() === data.name.toLowerCase().trim());
        
        data.name && index === -1  ? (
            setGifts([...gifts, {id: giftId, name: data.name, price: data.price, img: data.url, receiver: data.receiver, qty: data.number}]),
            handleClear()
        ) : (
            gifts[index].qty += parseInt(data.number),
            handleClear()
        );
    }

    const handleSubmitEdit = (e) => {
        e.preventDefault();

        const index = gifts.map(gift => gift.id).indexOf(parseInt(e.target.id.value));
        const GIFT_ID = parseInt(e.target.id.value);

        gifts.splice(index, 1);

        setGifts([...gifts, {id: GIFT_ID, name: data.name, price: data.price, img: data.url, receiver: data.receiver, qty: data.number}]);
    }

    const handleEdit = ({name, price, img, receiver, qty}) => {
        setData({
            name: name,
            price: price,
            url: img,
            receiver: receiver,
            number: qty
        })
    }

    const handleDelete = (id) => {
        setGifts(gifts.filter(gift => gift.id !== id));
    }

    const handleDeleteAll = () => {
        confirm('¿Desea borrar la lista de regalos?') ? setGifts([]) : <></>; 
    }

    const handleRandom = () => {

        const randomGifts = [
            {name: 'PS5', price: 2500, img: 'https://arsonyb2c.vtexassets.com/arquivos/ps5.png'},
            {name: 'Milanesa', price: 550, img: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Weekend_in_Buenos_Aires.jpg'},
            {name: 'Mouse', price: 900, img: 'https://http2.mlstatic.com/D_NQ_NP_633704-MLA48267038056_112021-O.webp'},
            {name: 'Chaleco', price: 1200, img: 'https://static.zara.net/photos///2022/S/0/2/p/5320/330/500/2/w/560/5320330500_6_1_1.jpg?ts=1655218828433'},
            {name: 'Planchita de pelo', price: 600, img: 'https://hendel-r7d8odghj1.stackpathdns.com/media/catalog/product/cache/0c3e9ac8430b5a3e77d1544ae1698a10/3/9/39615.jpg'},
            {name: 'Caramelos', price: 50, img: 'https://cdn11.bigcommerce.com/s-abmjjefojj/images/stencil/1280x1280/products/3173/13104/Flyn-Paff-Tutti-Frutti-Argentina_Select-1000x1000__81262.1607614117.jpg?c=1'}
        ];

        const random = Math.floor(Math.random() * randomGifts.length);
        const {name: randomName, price: randomPrice, img: randomImg} = randomGifts[random];

        setData({
            name: randomName,
            price: randomPrice,
            url: randomImg,
            receiver: '',
            number: 1
        })
    }

    const totalPrice = gifts.reduce((acc, cur) => acc + (cur.price * cur.qty), 0).toFixed(2);

    return (
        <GiftContext.Provider value={{
            gifts,
            loading,
            data,
            totalPrice,
            handleInputChange,
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