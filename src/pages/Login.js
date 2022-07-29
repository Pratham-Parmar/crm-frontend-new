import React, { useState } from "react";
// import { useForm } from 'react-hook-form';
// const { useForm } = ReactHookForm
import "./form.css";
import BASE_URL from "../config";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({ username: "", password: "" });
  const handleInputChange = (e) => {
    e.persist();
    setInputs((inputs) => ({ ...inputs, [e.target.name]: e.target.value }));
  };

  const sendMessage = (e) => {
    if (e) e.preventDefault();
    fetch(BASE_URL + "/login", {
      method: "POST",
      crossDomain: true,
      credentials: "include",
      body: JSON.stringify(inputs),
    }).then(function (resp) {
      if (resp.status === 200) {
        localStorage.setItem("Login_status", true);
        navigate("/table");
      }
      console.log(resp);
    });
  };
  return (
    <div className="contact__wrap">
      <h1>Login</h1>
      <form onSubmit={(e) => sendMessage(e)} className="contact__form">
        <div>
          <label>Email</label>
          <input
            name="username"
            type="text"
            value={inputs.email}
            // checked={setselectedOption1("Import")}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            name="password"
            type="password"
            value={inputs.password}
            // checked={setselectedOption1("Export")}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <input type="submit" value="LOGIN" />
      </form>
    </div>
  );
};

export default Form;
