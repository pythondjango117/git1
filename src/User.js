import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import { registerUser } from './Database/DBService'
import DropdownList from "react-widgets/DropdownList";



function User() {
    const {register, handleSubmit, reset, formState:{errors}}=useForm()

    const getRegisterUser=(userObj)=>{
        console.log(userObj)
        registerUser(userObj)
        reset()

        // const [city, setCity]= useState([]);

        // useEffect( ()=>{
        //   const getcity= async()=>{   
        //       const rescity= await fetch(`http://127.0.0.1:8088/user`);
        //       const rcity= await rescity.json();
        //       setCity(await rcity);
  }
    
    
    return(
        <>
        <center>
        <div className='container'>
          <h1 className='text-primary'><center>Practical Task</center></h1>
          <div className='row col-md-3'>
            <form onSubmit={handleSubmit(getRegisterUser)}>
             <div className='mb-3'>
               <input type='text' className='form-control' placeholder='CityName'
                {...register("cityname",{required:"This Field is Required...",
                minLength:{
                    value:3,
                    message:"Minimum 3 Characters Required"
                }
                })}/>
                <h5>{errors.cityname?.message}</h5>  
             </div>
             <button>Submit Button</button>
             <br></br>
             <br></br>
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
                })} />
                <h5>{errors.name?.message}</h5>
             </div>
             <div>
             <DropdownList
                     defaultValue="Select City"
                     data={["Pune", "Mumbai", "Lucknow", "Varanasi", "Ahmedabad"]}
                        />
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
                })} />
                <h5>{errors.mobile?.message}</h5>
             </div>
             <div className='mb-3'>
              <input type="number" className='form-control' placeholder='salary'
              {...register("salary", {required:"Field Required..",
                })} />
                <h5>{errors.name?.message}</h5>

            <div className='mb-3'>
             <input type="file" className='form-control'
              {...register("image", {required:"Field Required..",
                })} />
            </div>
                <button>Submit Button</button>
             </div>
            </form>
          </div>
        </div>
        </center>
        </>
    )
}

export default User