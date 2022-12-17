import react from 'react'
import {NavLink, Routes, Route} from 'react-router-dom'
import Display from './Display'
import User  from './User'
import EditUser from './EditUser'
import ErrorPage from './ErrorPage'



function App() {
    return (<>
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
     <div className='container-fluid'>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav'>
        <li className='nav-item'>
           <NavLink to="user" className="nav-link">User</NavLink>
        </li>
        <li className='nav-item'>
           <NavLink to="display" className="nav-link">Display</NavLink>
        </li>
        </ul>
     </div> 
     </div>
    </nav>

       <Routes>
        <Route path='/user' element={<User/>}></Route>
        <Route path='/display' element={<Display/>}></Route>
        <Route path='/edituser/:id' element={<EditUser/>}></Route>
        <Route path='/*' element={<ErrorPage/>}></Route>
       </Routes>
        

    </>)
}

export default App
