import React from 'react'
import styles from './Navbar.module.css'
import { useNavigate } from 'react-router-dom';
function NavbarDash() {

    const navigate =useNavigate()
        function logout() {
          localStorage.removeItem("token");
          navigate("/login");
        }
  return (
    <div>
      <nav className={styles.mainNav}>
        <div className={styles.logo}>Dashboard</div>
        <div className={styles.seocond}>
            <h3 onClick={()=>{
                navigate("/addata");
            }}>
                Add_data
            </h3>
            <h3>
                users
            </h3>
            <button className={styles.logout} onClick={logout}>
                logout
            </button>

        </div>
      </nav>
    </div>
  );
}

export default NavbarDash;
