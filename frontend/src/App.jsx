import React from 'react'
import './App.css'
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import  Home  from './pages/User/Home.jsx';
import  Application  from './pages/User/Application.jsx';


function App() {
  

  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/application" element={<Application/>}/>



        </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
