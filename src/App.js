import React from 'react';
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Hero/Home';
import About from './components/Hero/About';
import Contact from './components/Hero/Contact';
import Services from './components/Hero/Services';
import Hero from './components/Hero/Hero';
import FlightsDisplay from './components/Body/Flights';
import StoreProvider from './context/Provider';
import SpecificFlight from './components/Body/SpecificFlight';

const App = () => {
   
  return (
    <>
    
    <BrowserRouter>
    <StoreProvider>
    <Routes>
      <Route path='/'exact element={<Home/>}>
      <Route path='' exact element={<Hero/>}/>
      <Route path='services' element={<Services/>}/>
      <Route path='about' exact element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='/flights' element={<FlightsDisplay/>}/>
      <Route path="/flights/:id" element={<SpecificFlight/>}/>
      </Route>
      
    </Routes>
    </StoreProvider>
    </BrowserRouter>
    
    </>
  )
}

export default App