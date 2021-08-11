import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //when app loads
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is >>", authUser);
      if (authUser) {
        // the user just logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
