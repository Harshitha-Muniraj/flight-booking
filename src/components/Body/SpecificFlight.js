import React from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

const SpecificFlight = () => {
    let {id}  = useParams();
    console.log(id)
    
  return (
    <>
     <p>now in {id}</p>
    </>
  )
}

export default SpecificFlight