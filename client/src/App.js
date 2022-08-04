import { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { Clase, Error, Home, Login, Registro } from "./pages";
import Test from "./pages/Test";
import { selectUser } from "./store/userSlice";

function App() {
  const user = useSelector(selectUser);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <Router>
      {user && <Navbar />}
      <Switch>
        <Route exact path="/test">
          <Test />
        </Route>
        <Route exact path="/">
          {user ? <Clase /> : <Home />}
        </Route>
        <Route exact path="/ingreso">
          <Login />
        </Route>
        <Route exact path="/registro">
          <Registro />
        </Route>
        <Route exact path="/clase">
          {user ? <Clase /> : <Home />}
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
