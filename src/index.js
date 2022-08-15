import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Table from "./pages/Table";
import Form from "./pages/Form";
import Login from "./pages/Login";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/table" element={<Table />} />
            <Route path='/login' element={<Login/>}/>
            <Route path="/add" element={<Form />} />
        </Routes>
    </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

