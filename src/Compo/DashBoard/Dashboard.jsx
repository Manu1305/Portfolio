import React from 'react'
import { useNavigate } from 'react-router-dom';
import NavbarDash from './Navbar/Navbar';

function Dashboard() {
    const navigate = useNavigate();
    function logout(){
        localStorage.removeItem('token');
      navigate('/login')
    }
    useNavigate(()=>{
        console.log('welcome')
    },[])
  return (
    <div>
        <NavbarDash/>
        <h1>
            Welocme to dash board
        </h1>
        <div>
            <nav>
                <ul></ul>
            </nav>
        </div>
      <button style={{marginTop:'400px'}} onClick={logout}>Logout</button>
    </div>
  )
}

export default Dashboard
