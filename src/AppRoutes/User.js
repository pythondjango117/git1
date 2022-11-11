import React from 'react'
import { useForm } from 'react-hook-form'
import {registerUser} from '../Database/DBService'

function User() {
       const {register,handleSubmit,reset,formState:{errors}}=useForm()

       const getRegisterUser=(userObj)=>{
        //console.log(userObj)
        registerUser(userObj)
        reset()
       }

  return(<>

     <div className='container'>
       <h1 className='text-primary'>USER REGISTERATION</h1>
      <div className='row col-md-3'>
        <form onSubmit={handleSubmit(getRegisterUser)}>
          <div className="mb-3">
           <input type="text" class="form-control" placeholder="FirstName" 
           {...register("firstname",{required:"This Field is Required...",
           minLength:{
            value:3,
            message:"Minimum 3 Characters Required!!"
          }
           })} />
           <h6>{errors.firstname?.message}</h6>
          </div>
          <div className="mb-3">
           <input type="text" class="form-control" placeholder="LastName" 
           {...register("lastname",{required:"Field Required..",
              maxLength:{
                value:15,
                message:"Maximum 15 Characters Allowed!!"
              }
              })} />
              <h6>{errors.lastname?.message}</h6>
          </div>
          <div className="mb-3">
           <input type="text" class="form-control" placeholder="Mobile" 
           {...register("mobile", {required:"This Field is Required...",
             pattern:{ 
               value:/^[789]{1}[0-9]{9}$/,
               message:"Invalid Mobile Number!!"
             }
             })}/>
             <h6>{errors.mobile?.message}</h6>
          </div>
          <div className="mb-3">
           <input type="text" class="form-control" placeholder="Email"
            {...register("email", {required:"This Field is Required...",
            })}/>
            <h6>{errors.email?.message}</h6>
          </div>
          <div className="mb-3">
           <input type="text" class="form-control" placeholder="Username" 
           {...register("username", {required:"This Field is Required"})} />
            <h6>{errors.username?.message}</h6>
          </div>
          <div className="mb-3">
           <input type="text" class="form-control" placeholder="Password" 
           {...register("password",{required:"This Field is Required..."})} />
            <h6>{errors.password?.message}</h6>
          </div>
          <div className="mb-3 text-center">
           <input type="submit" class="btn btn-outline-success" value="Register User"/>
          </div>
        </form>  
      </div>  
     </div>
  </>)
}

export default User