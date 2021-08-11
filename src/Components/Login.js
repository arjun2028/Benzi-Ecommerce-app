import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import "./Login.css";
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((e) => {
        alert(e.message);
      });
  };
  return (
    <div className="Login">
      <Link to="/">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6GgoBGH7h8pxMJcJ7NeranAa-LcaYIdiXng&usqp=CAU"
        />
      </Link>

      <div className="container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={signIn} className="signinbutton">
            Sign In
          </button>
        </form>
        <p>By signing in you agree to terms and condition</p>
        <button type="submit" onClick={register} className="createaccount">
          Create an Benze account
        </button>
      </div>
    </div>
  );
}

export default Login;
