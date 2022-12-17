import React, {useEffect, useState} from 'react'
import { getAllUsers, userDeleteById } from './Database/DBService'
import swal from 'sweetalert'
import { NavLink } from 'react-router-dom';



function Display() {

    const [users, setUser]=useState([])

    useEffect(() =>{
        getUsersFromDB()
    })
    
    const getUsersFromDB=async()=>{
        const resp =await getAllUsers()
        // console.log(resp)
        setUser(resp.data)
    }

    const deleteUser=(userId)=>{
        userDeleteById(userId)
        swal({
            title:"User"+userId,
            text: "User is Succesfully Deleted",
            icon:"info"
        });
    }

    return(<>
    <h1 className='text-primary'><center>Task</center></h1>
    <div className='container'>
    <table className='table table-striped table-dark'>
      <thead>
        <tr>
            <th scope='col'>Sr. No.</th>
            <th scope='col'>Name</th>
            <th scope='col'>Salary</th>
            <th scope='col'>Mobile</th>
            <th scope='col'>Profile Pic</th>
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
                    <td>{u.name}</td>
                    <td>{u.salary}</td>
                    <td>{u.mobile}</td>
                    <td></td>
                    <td>
                        <NavLink to={`/edituser/${u.id}`}>
                           Edit
                            {/* <i className='bi bi-pencil-square text-primary'></i> */}
                        </NavLink>
                    </td>
                    <td>
                      
                     {/* <i className='bi bi-trash text-danger' onClick={()=>deleteUser(u.id)}></i> */}
                     <p onClick={()=>deleteUser(u.id)}>delete</p>
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