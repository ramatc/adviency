import React from 'react';
import GiftContextProvider from './context/GiftContext';
import GiftListContainer from './components/GiftListContainer';
import './App.css';

const App = () => {
    return (
        <GiftContextProvider>
            <GiftListContainer/>
        </GiftContextProvider>
    )
}

export default App
