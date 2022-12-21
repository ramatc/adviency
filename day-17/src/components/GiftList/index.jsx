import Gift from '../Gift';

const GiftList = ({gifts}) => {
    return (
        <ul>
            {gifts.map((gift, i) => 
                <Gift gift={gift} key={i}/>
            )}
        </ul>
    )
}

export default GiftList;