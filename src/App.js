import logo from './logo.svg';
import './App.css';
import Home from './Compo/Home';
import Nav from './Compo/Nav';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Compo/Login/Login';
import Weather from './Compo/weather/Weather';
import Criket from './Compo/Criket/Criket';
function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
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
        </Routes>
    
    </div>
    </Router>
  );
}

export default App;
