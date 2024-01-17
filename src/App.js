import logo from './logo.svg';
import './App.css';
import Home from './Compo/Home';
import Nav from './Compo/Nav';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Weather from './Compo/weather/Weather';
import Criket from './Compo/Criket/Criket';
import Login from './Compo/Login/Login';
import SignUp from './Compo/Backnd/Signup/Signup';
import Dashboard from './Compo/DashBoard/Dashboard';
import AddData from './Compo/DashBoard/Navbar/AddData/AddData';
import NavbarDash from './Compo/DashBoard/Navbar/Navbar';
function App() {
  const user =localStorage.getItem("token")
  return (
    <Router>
    <div className="App">
    
        <Routes>
          <Route
            path="/"
            element={<Home/>}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/weather"
            element={<Weather />}
          />
          <Route
            path="/ip"
            element={<Criket />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/signup"
            element={<SignUp />}
          />


          {/* //DASHBOARD  */}


          
          {user &&
          
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />
          }
          <Route
            path="/addata"
            element={<AddData />}
          />
        </Routes>
    
    </div>
    </Router>
  );
}

export default App;
