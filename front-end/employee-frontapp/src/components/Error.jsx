import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
      <div className='mx-auto container text-center'>
      <div className='text-3xl'>Page does not exist...</div>
      <Link to={"/"}> <button>Click here to redirect yourself to the homepage</button></Link>
      
      </div>
  )
}

export default Error