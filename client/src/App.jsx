import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import './App.css'
import Home from './components/Home'
import Test from './components/Test'

export default function App() {

  return (
    <BrowserRouter>
        <Routes>
        <Route index element={<Home/>} />
          <Route exact path="/home" Component={Home} />
          <Route exact path="/test" Component={Test} />
        </Routes>
    </BrowserRouter>
  )
};

const  root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
