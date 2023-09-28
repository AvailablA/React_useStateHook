import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css'
import { useState } from 'react';

const App = ()=>{

  const[name,setName]= useState("");

  const[fName,fullName]= useState();
  
  const userIn= (input)=>
  {
    console.log(input.target.value);  //  inside inspect
    setName(input.target.value)
  }

  const onSubmit= ()=>
  {
    fullName(name);
  }
  return(
    <>
      <div>
        <h1>Hello  {fName} </h1>
        <input type='text' placeholder='Enter your name'    // step-1
                onChange={userIn}
                value={name} />
        <br/>                               
        <button onClick={onSubmit}>SUBMIT</button>
      </div>
    </>
  )
}

export default App;
