import React, { useEffect, useState } from 'react'
import FatchCard from './FatchCard';

const Datafac = () => {
    const [ipone, setiphone] = useState([]);
      useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(res => res.json())
        .then(data => setiphone(data.data))
      },[])
    //  console.log(ipone) 
  return (
    <div>
      <h1 className='text-center max-auto text-5xl'>This is category section</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {
          ipone.map(iphone => <FatchCard iphone={iphone}/>)
        }
      </div>
    </div>
  )
}

export default Datafac