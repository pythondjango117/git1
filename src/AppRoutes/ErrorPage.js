import React from 'react'
import errorPic from '../images/guaton-computadora.gif'
import { NavLink } from 'react-router-dom'

function ErrorPage() {
  return (<>
    <div className='text-center'>
      <h1>404 ERROR NOT FOUND</h1>
      <img src={errorPic} alt="ErrorPhoto"/> 
      <br></br>

      <NavLink to='Home'>
         <button className='btn btn-primary'>GO TO HOME</button>
      </NavLink>
    </div>
  </>)
}

export default ErrorPage
