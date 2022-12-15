import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
const Login = ({ handleloginCB }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const login_creds = {
    email: "shahzaib",
    password: "1234",
  };

  const userLogin = () => {
    if (email === login_creds.email && password === login_creds.password) {
      dispatch({
        type: "ISLOGGED_IN",
        payload: true,
      });
      window.localStorage.setItem("username", email);
      handleloginCB();
      window.location.reload();
      console.log("loggd innn");
    } else {
      console.log("loggd innn failed");
    }
  };

  useEffect(() => {
    if (window.localStorage.getItem("username")) {
      dispatch({
        type: "ISLOGGED_IN",
        payload: true,
      });
      handleloginCB();
    }
  }, []);

  return (
    <>
      {/* <input
        type="text"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      /> */}
      {/* <input
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      /> */}
      {/* <button onClick={userLogin}>Login</button> */}

      {/* aaaaaaaaaaaaaaaaaaaaaaaaaaaa */}

      <h2 className="text-center">Login Form</h2>

      <form>
        <div class="container">
          <label for="uname">
            <b>Username</b>
          </label>
          <input
            className="fields-log"
            type="text"
            placeholder="Enter Username"
            name="uname"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <label for="psw">
            <b>Password</b>
          </label>
          <input
            className="fields-log"
            placeholder="Enter Password"
            name="psw"
            required
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <button type="button" onClick={userLogin} className="logg">
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
