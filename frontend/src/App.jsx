import React from 'react'
import './App.css'
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import  Home  from './pages/User/Home.jsx';


function App() {
  

  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Home/>}/>


        </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
