import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Statistics from './pages/Statistics';
import CheckNow from './pages/CheckNow';
import Header from './components/Header';
import Footer from './components/Footer';
import Result from './components/Result';
import s_Route from './pages/s_Route';


export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/statistics" element={<Statistics/>} />
        <Route path="/fillform" element={<CheckNow/>} />
        <Route path="/result" element={<Result/>} />
        <Route path="/safestroute" element={<s_Route/>}/>
        
    
      </Routes>
    <Footer/>

    </BrowserRouter>
  )
}
