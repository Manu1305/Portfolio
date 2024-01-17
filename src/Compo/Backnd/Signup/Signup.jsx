import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [id, setId] = useState();
  const [pass, setPass] = useState();
  const navigate = useNavigate();
  const Checklogin = (e) => {
    e.preventDefault();
    try {
      axios
        .post("http://localhost:5000/signup", {
          id,
          pass,
        })
        .then((res) => {
          if (res.data == "exist") {
           
             alert("wrong");
          } else if (res.data == "notexist") {
             navigate("/");
          }
        })
        .catch((e) => {
          alert("wrong");
          console.log(e);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ backgroundColor: "yellow" }}>
      <h2>1305 Signup Page</h2>
      <div className="login-div">
        <input
          type="text"
          placeholder="id"
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="code"
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
        <button onClick={Checklogin}>Submit</button>
      </div>
    </div>
  );
}

export default SignUp;
