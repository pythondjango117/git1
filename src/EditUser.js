import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import {useNavigate, useParams } from 'react-router-dom'
import swal from 'sweetalert'
import { getUserById, updateUser } from './Database/DBService'

const EditUser=()=> {
    const {id}=useParams()
    const {register, handleSubmit, setValue}=useForm()
    const [user, setUser]=useState({})

    useEffect(()=>{
        getUserFromDB()
    },[])

    const navigate=useNavigate()

    const getUserFromDB=async()=>{
        const userObject=await getUserById(id)
        console.log(userObject.data)
        setUser(userObject.data)
    }

    const getUpdatedUser=(userObj)=>{
        console.log(userObj)
        updateUser(userObj)
        swal({
            title:"user",
            text:"User is Successfully Updated!",
            icon:"success",
        });
        navigate("/display")
    }

     return(<>
       <h1><center>EditUser</center></h1>
        <div className='container'>
          <h1 className='text-primary'>Update User Profile</h1>
          <div className='row col-md-3'>
             <form onSubmit={handleSubmit(getUpdatedUser)}>
              <div className='mb-3'>
                <input type="hidden" className='form-control' {...register("id")} 
                {...setValue("id", user.id)} />
              </div>
              
              {/* updated from here */}

              <div className='mb-3'>
              <input type="text" className='form-control' placeholder='Name'
              {...register("name", {required:"Field Required..",
                minLength:{
                    value:3,
                    message:"Minimum 3 Characters Required!!"
                },
                maxLength:{
                    value:20,
                    message:"Maximum 20 Characters Allowed!!"
                }
                })} {...setValue("name", user.name)} />
                
             </div>
             <div>
             {/* <DropdownList
                     defaultValue="Select City"
                     data={["Pune", "Mumbai", "Lucknow", "Varanasi", "Ahmedabad"]}
                        /> */}
              </div>
               {/* <div className="col-md-3">
                <label  className="form-label">City</label>
                <select className="form-select" name="city">
                  <option value="">--Select City--</option>
                  {
                      city.map( (gcity, index)=>(
                      <option key={index} value={gcity.city_id}> { gcity.city_name} </option>
                      ))
                  }                 
                </select>
              </div> */}
             
             <div className='mb-3'>
              <input type="text" className='form-control' placeholder='Mobile'
              {...register("mobile", {required:"Field Required..",
                pattern:{
                    value:/^[6789]{1}[0-9]{9}$/,
                    message:"Invalid Mobile number!!"
                }
                })} {...setValue("mobile", user.mobile)} />
               
             </div>
             <div className='mb-3'>
              <input type="number" className='form-control' placeholder='salary'
              {...register("salary", {required:"Field Required..",
                })} {...setValue("salary", user.salary)} /> 
               
              </div>
            

            {/* untill here */}
              <div className='mb-3 text-center'>
                  <input type="submit" className='btn btn-outline-success' value="update user"/>
              </div>
             </form>
          </div>
        </div>
     </>)

     }

    

export default EditUser
