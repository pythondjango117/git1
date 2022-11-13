import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './CSS/style.css';

const name="Ayodhya";

// const hstyle={
//   color:"brown",
//   fontStyle:"Bold"
// }

const hstyle={
  color:"brown",
  fontStyle:"italic"
}

//const name='Deepankar';
// const para='This is Id of Company Employees:';
// const obj=[
//   {Id:101, name:"Deepankar"},
//   {Id:102, name:"Jay"},
//   {Id:103, name:"Pratima"}
// ];

// const myelement=(
// <ul>
//   <li>Item 1</li>
//   <li>Item 2</li>
//   <li>Item 3</li>
// </ul>
// )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
     <h1 style={{color:"red", background:"yellow"}}>Welcome To {name}! the Holy City</h1>
     <h1 style={hstyle}>Welcome to {name}!</h1>
     <h1 id="myid">This is External CSS</h1>
  </>
);

//<>
     //{/* <h1>Hello! {name} This is your Team </h1>*/}
     /* {<h1>{para}</h1>
     {
      obj.map(e=>{
        //return <h1>Id:{e.Id} Name:{e.name}</h1>
        return (
          <>
           <ol>
            <li>Id:{e.Id} Name:{e.name}</li>
           </ol> */
          //</>
        //)
      //})
     //} 
//</>


//  <>
//      <h1>Hello!! {name} you are developing React Project </h1>
//      <h1>{obj.Id} {obj.name}</h1>
// </> 

  // myelement


//JSX Fragment or Shortest Syntax ===> <></>
  // <>
  // <h1>Welcome to React App!</h1>
  // <h2>This is React Project Babel JS</h2>
  // </>

  // <React.Fragment>
  //   <h1>Welcome to React App</h1>
  //   <h2>This is New Project of React</h2>
  // </React.Fragment>

  // <div>
  //   <h1>Welcome to React App</h1>
  //   <h2>This is New Project</h2>
  // </div>
  
// [
//   <h1>Welcome to New React App!</h1>,
//   <h2>This is React Project</h2>
// ]


