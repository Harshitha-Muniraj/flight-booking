import React, { useContext, useState} from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import Store from '../../context/Createcontext'

const FlightsDisplay = () => {
  
  const {x}=useContext(Store);
  
  const navigate=useNavigate()
  const specificFlight=()=>{
    console.log('hhh') 
    // let { id } = useParams();
  //  console.log(`id ${id}`)
    navigate(`/flights/:id`)
  }
  return (
    <>
    <div className='grid-bg'>
    <div className='flight-grid-container'>
        {
          x.map((item,index)=>{
            console.log('item',item)
            let {id,arrivalTime,name,origin,destination,departureTime,price}=item;
            
              let x=arrivalTime.split(":");
              let y=departureTime.split(":");
              let one=x[0]-y[0];
              let two=x[1]-y[1];
              let result =`${one}hr ${two}min`
         
            return(
              <>
              <div className='flight-card' key={index}>
                <div className='flex bold'>{name}</div>
                <div className='flex flex-gap'>
                  <div className='bold'>
                    {departureTime}
                  </div>
                  <div className='font-less'>
                    {origin}
                  </div>
                </div>
                <div className='flex font-less time-btm-border'>{result}</div>
                <div className='flex flex-gap'>
                  <div className='bold'>
                    {arrivalTime}
                  </div>
                  <div className='font-less'>
                    {destination}
                  </div>
                </div>
                <div className='flex flex-gap'>
                  <div className='bold'>&#8377; {price}</div>
                  <button className='book-btn' id={id} onClick={specificFlight}>Book Now</button> 
                </div> 
              </div>
              </>
            )
          })
        }
    </div>
    </div>
    </>
  )
}

export default FlightsDisplay