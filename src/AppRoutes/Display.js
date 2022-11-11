import React, {useEffect, useState} from 'react'
import {getAllUsers, userDeleteById} from '../Database/DBService'
import {NavLink} from 'react-router-dom'

function Display() {
  
    const [users, setUser]=useState([])

    useEffect(()=>{
        getUsersFromDB()
    })

    const getUsersFromDB=async()=>{
        const resp = await getAllUsers()
        setUser(resp.data)
    }

    const deleteUser=(userId)=>{
        userDeleteById(userId)
    }


return (<>
<h1 className='text-primary'>User Details</h1>
<div className='container'>
<table class="table table-dark table-striped">
<thead>
   <tr>
    <th scope='col'>ID No.</th>
    <th scope='col'>FirstName</th>
    <th scope='col'>LastName</th>
    <th scope='col'>Mobile</th>
    <th scope='col'>Email</th>
    <th scope='col'>UserName</th>
    <th scope='col'>Password</th>
    <th scope='col'>Edit</th>
    <th scope='col'>Delete</th>
   </tr>
</thead>  
<tbody className='table-info'>
    {
      users.map(u=>{
        return(<>
          <tr>
            <th scope='row'>{u.id}</th>
            <td>{u.firstname}</td>
            <td>{u.lastname}</td>
            <td>{u.mobile}</td>
            <td>{u.email}</td>
            <td>{u.username}</td>
            <td>{u.password}</td>
            <td>
                <NavLink to={`/editUser/${u.id}`}>
                    <i className='bi bi-pencil-square text-primary'></i>
                </NavLink>
            </td>
            <td>
            <i class="bi bi-trash text-danger" onClick={()=>deleteUser(u.id)}></i>
            </td>
          </tr>
        </>)
      }) 
    }
</tbody>
</table>
</div>
</>)
}

export default Display