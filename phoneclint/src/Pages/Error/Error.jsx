import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
      <h1 className='text-5xl'>page not found</h1>
      <h1 className='mx-auto text-9xl mt-11'>404</h1>
     <Link to='/'>
     <button className='btn mt-11 bg-[#98c532]'>HOME</button>
     </Link>
    </div>
  )
}

export default Error
