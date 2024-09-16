import { useState } from 'react'
import { ReactDOM } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './pages/HomeCandidato'
import './pages/HomeHr'
import './App.tsx'
import App from './App.tsx'

export default function Index() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element= {<App />}>
            <Route path='HomeCandidato' element= {<HomeC />}></Route>
            
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
  
}


