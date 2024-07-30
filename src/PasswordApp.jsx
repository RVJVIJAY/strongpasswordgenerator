import React, { useState } from 'react'

const PasswordApp = () => {
    const [Length,setLength]=useState(8)
    const [Uppercase,setUppercase]=useState(true)
    const [Lowercase,setLowercase]=useState(true)
    const [numbers,setNumbers]=useState(true)
    const [symbel,setSymbel]=useState(true)
    const [password,setPassword]=useState("")
    const genpassword=()=>{
        const upperwords="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowerwords="abcdefghijklmnopqrstuvwxyz";
        const number="0987654321";
        const symbels="!@#$%^&*()_+=-"
        let newpassword=""; 
        if(Lowercase) newpassword+=lowerwords;
        if(Uppercase) newpassword+=upperwords;
        if(numbers) newpassword+=number;
        if(symbel) newpassword+=symbels;
        let originalgenpass ="";
        for(let i=0;i<Length;i++){
            const getrandomno=Math.floor(Math.random()*newpassword.length)
            originalgenpass +=newpassword[getrandomno]
        }
        console.log(originalgenpass)
        setPassword(originalgenpass)  
    };

    const copypassword=()=>{
        navigator.clipboard.writeText(password)
    }
  return (
    <div className='container'>
      <h1>Strong Password Generator</h1>
      <div className='inputgrp'>
        <label htmlFor='len'>Password Length : </label>
        <input type='number'  value={Length} onChange={(e)=>setLength(parseInt(e.target.value))}/>
      </div>
      <div className='checkboxgrp'>
    <div className='check'>
        <input type='checkbox' id='upper' checked={Uppercase} onChange={(e)=>setUppercase(e.target.checked)}/>
        <label htmlFor='upper' >Include Uppercase</label>
    </div>
    <div className='check'>
        <input type='checkbox' id='lower' checked={Lowercase} onChange={(e)=>setLowercase(e.target.checked)}/>
        <label htmlFor='lower' >Include Lowercase</label>
    </div>
    <div className='check'>
        <input type='checkbox' id='number' checked={numbers} onChange={(e)=>setNumbers(e.target.checked)}/>
        <label htmlFor='number' >Include numbers</label>
    </div>
    <div className='check'>
        <input type='checkbox' id='symbel' checked={symbel} onChange={(e)=>setSymbel(e.target.checked)}/>
        <label htmlFor='symbel' >Include symbels</label>
    </div>
      </div>
      <div className='btn'>
        <button className='btngen' onClick={genpassword}>Generate Password</button>
      </div>
      <div className='result'>
        <input type='text'value={password} readOnly/> 
        <button     onClick={copypassword}> Copy</button>
      </div>
    </div>
  )
}

export default PasswordApp
