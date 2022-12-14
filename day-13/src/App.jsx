import GiftContextProvider from './context/GiftContext';
import GiftListContainer from './components/GiftListContainer';
import './App.css';

function App() {
    return (
        <GiftContextProvider>
            <GiftListContainer/>
        </GiftContextProvider>
    )
}

export default App;
