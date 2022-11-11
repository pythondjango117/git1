import axios from "axios";

let url= "http://127.0.0.1:8088/user"

export const registerUser=(userObject)=>{
    return axios.post(url, userObject)
}

export const getAllUsers=()=>{
    return axios.get(url)
}

export const userDeleteById=(userId)=>{
    return axios.delete(url+"/"+userId)
}

export const getUserById=(userId)=>{
    return axios.get(url+"/"+userId)
}
