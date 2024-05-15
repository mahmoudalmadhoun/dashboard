import React from 'react';
import { createRoot } from 'react-dom/client';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import RootReducer from './redux/App';
import { configureStore } from '@reduxjs/toolkit';
import Routes from './Router';

const root = createRoot(document.getElementById('Mahmoud-Almadhoun+467098520'));
const store = configureStore({
    reducer: RootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})


root.render(
    <Provider store={store} >
    <BrowserRouter>
        <Routes />
    </BrowserRouter>
</Provider>
);