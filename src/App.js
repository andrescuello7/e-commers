//Herramientas de uso
import "./App.css";
import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Rutas de Pages
import Home from "./pages/Home/Home";
import Admin from "./pages/Admin/Admin";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

//Componentes
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/FooterBasico";
axios.defaults.baseURL = "https://server-commers.herokuapp.com/api/";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
