import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'
function Login() {
    const [id,setId]=useState()
    const [pass,setpass]=useState()
    const ClickHandle =(e)=>{
        e.preventdefault()
        alert(`${id}hello${pass}`)
        axios.post(`http://locahost:8000,${id,pass}`)
        .then(res=>
            console.log(res)
 
        ).catch(err=>console.log(err))


    }

 


  return (
    <div>
      <h2>1305 login Page</h2>
      <div className='login-div'>

      <input type="text" placeholder='id' onChange={(e)=>{
        setId(e.target.value)
      }} />
      <input type="text" placeholder='code' onChange={(e)=>{
        setpass(e.target.value) 
      }} />
      <button onClick={(e)=>{
      ClickHandle(e)
      }}>Submit</button>
       {/* <button onClick={()=>{
      handleClick();
      }}>weatherdata</button> */}

      </div>
    </div>
  )
}

export default Login
