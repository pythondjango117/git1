import React from 'react'
import { NavLink } from 'react-router-dom'

function ErrorPage() {
  return (<>
   <div>
      <h1><center>404 ERROR NOT FOUND</center></h1>
      <br></br>

    <NavLink to="User">
        <center><button type="button" class="btn btn-info">Go To User</button></center>
    </NavLink>
   </div>
   
  </>)
}

export default ErrorPage
