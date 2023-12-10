import React, {useState,useContext } from 'react'
import NavBar from './NavBar'
import FlightData from '../../data';
import { useNavigate } from 'react-router-dom';
import FlightsDisplay from '../Body/Flights';
import Store from '../../context/Createcontext';



const Hero = () => {
  const [flights,setFlights]=useState(FlightData);
  const [user,setUser]=useState({origin:'',destination:'',date:''});
  const [filteredFlights,setFilteredFlights]=useState([]);
 
  
  const {setx}=useContext(Store)
  const navigate=useNavigate();
  const {origin,destination,date}=user;
  // console.log('store',Store)
  function handleChange(e){
    setUser({...user,[e.target.name]:e.target.value})
  }
  const flightSearch=(e)=>{
    e.preventDefault();
    
    const flightFilter=flights.filter((item=>{
      item.date=date;
      
      return item.origin.split(" ").at(0).toLowerCase()==origin.toLowerCase() && item.destination.split(" ").at(0).toLowerCase()==destination.toLowerCase()
    }))
    console.log(flightFilter)
    setx(flightFilter);
    
    navigate('/flights')
    

  }

  return (
    <>
    <div className='home-bg'>
    <div className='hero-card'>
      <div className='hero-card-2'>
      <div className='card-container'>
        <div className='label-card'>
          <label>Leaving From</label>
          <input className='hero-inp' onChange={handleChange} type="text" name="origin" placeholder='City name' />
        </div>
        <div className='label-card'>
          <label>Going To</label>
          <input className='hero-inp' onChange={handleChange} type="text" name="destination" placeholder='City name' />
        </div>
        <div className='label-card'>
          <label>Date</label>
          <input className='hero-inp' onChange={handleChange} type="Date" name="date" placeholder='City name' />
        </div>
        <div className='label-card'>
          <label>Travellers</label>
          <input className='hero-inp' type="number" min={1} max={100} name="" placeholder='City name' />
        </div>
        
      </div>
      
      
      </div>
      <div>
        <button onClick={flightSearch}>Search</button>
      </div>
      
    </div>
    </div>
    
    </>
  )
}

export default Hero