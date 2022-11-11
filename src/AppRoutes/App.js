import React from "react"
import {NavLink, Routes, Route} from 'react-router-dom'
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Display from "./Display"
import EditUser from "./EditUser"
import ErrorPage from "./ErrorPage"
import MyService from "./MyService"
import User from "./User"


function App() {
    return (<>
         {/* <a href="home">HOME</a>
         <a href="service">SERVICE</a>
         <a href="user">USER</a>
         <a href="display">DISPLAY</a>
         <a href="about">ABOUT</a>
         <a href="contact">CONTACT</a> */}

         
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        <NavLink to="home" className="nav-link">HOME</NavLink>    
        </li>
        <li class="nav-item">
        <NavLink to="service" className="nav-link">SERVICE</NavLink>    
        </li>
        <li class="nav-item">
        <NavLink to="user" className="nav-link">USER</NavLink>    
        </li>
        <li class="nav-item">
        <NavLink to="display" className="nav-link">DISPLAY</NavLink>    
        </li>
        <li class="nav-item">
        <NavLink to="about" className="nav-link">ABOUT</NavLink>    
        </li>
        <li class="nav-item">
        <NavLink to="contact" className="nav-link">CONTACT</NavLink>    
        </li>
      </ul>
    </div>
  </div>
</nav>

       <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/service' element={<MyService/>}></Route>
        <Route path='/user' element={<User/>}></Route>
        <Route path='/display' element={<Display/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/editUser' element={<EditUser/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/*' element={<ErrorPage/>}></Route>
       </Routes>
    </>)
}

export default App