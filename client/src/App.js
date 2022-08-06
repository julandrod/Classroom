import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { Clase, Error, Home, Login, Registro } from "./pages";
import { selectUserState } from "./store/userSlice";

function App() {
  const { token } = useSelector(selectUserState);

  // useEffect(() => {
  //   localStorage.setItem("token", JSON.stringify(token));
  // }, [token]);
  return (
    <Router>
      {token && <Navbar />}
      <Switch>
        <Route exact path="/">
          {token ? <Clase /> : <Home />}
        </Route>
        <Route exact path="/ingreso">
          <Login />
        </Route>
        <Route exact path="/registro">
          <Registro />
        </Route>
        <Route exact path="/clase">
          {token ? <Clase /> : <Home />}
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
