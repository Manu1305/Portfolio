import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [id,setId]=useState()
  const [pass,setPass]=useState()
  const navigate =useNavigate()
 const Checklogin =(e)=>{
   e.preventDefault()
   try{
    axios.post("http://localhost:5000/login",{
      id,pass
    }).then(res=>{
      
      if(res.data=="exist"){
        localStorage.setItem("token", res.data);
        navigate("/dashboard")
      }

      else if(res.data=='notexist'){
        alert('wrong')
      }
    }).catch(e=>{
      alert("wrong")
      console.log(e);
    })
   }
   catch(err){
console.log(err);
   }
 }


  return (
    <div style={{marginTop:'500px'}}>
      <h2>1305 login Page</h2>
      <div className="login-div">
        <input type="text" onChange={(e)=>{
          setId(e.target.value)
        }} placeholder="id" />
        <input type="text" placeholder="code" onChange={(e)=>{
setPass(e.target.value)
        }} />
        <button onClick={Checklogin}>Submit</button>
      </div>
    </div>
  );
}

export default Login
