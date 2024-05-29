import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import layout from './pages/layouts.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import home from './pages/home.js';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(<App  language ="node.js"/>);

function Main(){
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<layout/>}>
            <Route index element={<home/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
}


