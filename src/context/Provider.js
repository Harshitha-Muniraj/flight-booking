import React, { useState } from 'react'
import Store from './Createcontext'
const StoreProvider = ({children}) => {
    const [x,setx]=useState([]) 
  return (
    <div>
     <Store.Provider value={{x,setx}}>
        {children}
     </Store.Provider>

    </div>
  )
}

export default StoreProvider;