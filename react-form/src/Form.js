import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [text, setText] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, seterror] = useState("");
  const [errEmail, setErrEmail] = useState("");

  const passwordKey = () => {
    const regexs =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!regexs.test(text.password)) {
      setErrEmail(
        "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
      );
    } else {
      setErrEmail("");
    }
  };

  const emailKey = () => {
    const regex =
      /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!regex.test(text.email)) {
      console.log("invalid mail");
      seterror("Invalid Mail");
    } else {
      seterror("");
    }
    console.log("press");
  };

  const [btn, setBtn] = useState("btn");
  const submit = () => {
    console.log("Clicked");
    alert("Form Submited");
    setText({
      name: "",
      email: "",
      password: "",
    });
  };
  const input = (e) => {
    console.log(e.target.value);
    const value = e.target.value;
    const name = e.target.name;
    setText((preValue) => {
      if (name === "name") {
        return {
          name: value,
          email: preValue.email,
          password: preValue.password,
        };
      } else if (name === "email") {
        return {
          name: preValue.name,
          email: value,
          password: preValue.password,
        };
      } else if (name === "password") {
        return {
          name: preValue.name,
          email: preValue.email,
          password: value,
        };
      }
    });
  };
  const colors = () => {
    console.log("Mouse Entered");
    if (btn === "btn") {
      setBtn("btn2");
    } else {
      setBtn("btn");
    }
  };
  return (
    <div className="form">
      <from className="form-input">
        <div className="name all">
          <label>Name:</label>
          <input
            onChange={input}
            name="name"
            autoComplete="off"
            onKeyPress
            value={text.name}
            className="nameinp"
            type="text"
          />
        </div>
        <div className="email all">
          <label>Email:</label>
          <br />
          <input
            className="input emailinp"
            onKeyPress={emailKey}
            autoComplete="off"
            name="email"
            onChange={input}
            value={text.email}
            type="email"
          />
        </div>
        <div className="error"> {error} </div>
        <div className="password all">
          <label>Password:</label>
          <input
            className="input passinp"
            autoComplete="off"
            name="password"
            onKeyPress={passwordKey}
            onChange={input}
            value={text.password}
            type="password"
          />
        </div>
        <div className="error"> {errEmail} </div>
        <div className="submit">
          <button
            className={btn}
            type="submit"
            onMouseEnter={colors}
            onClick={submit}
          >
            Submit
          </button>
        </div>
        <h4>
          {text.name},{text.email},{text.password}
        </h4>
      </from>
    </div>
  );
};

export default Form;
