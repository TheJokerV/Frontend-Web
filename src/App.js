import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";



const App = () => {
  
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
     
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <div>
      <nav className="board ">
        <Link to={"/"} className="navbar-brand">
          <img src="https://www.unicentrocucuta.com/wp-content/uploads/2020/05/EXAMEN-PARCIAL.png" width = "200px" height= "100px" />
        </Link>

        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              <h3> INICIO </h3>
            </Link>
          </li>


          {currentUser && (
            <li className="nav-item">
              <Link to={"/user"} className="nav-link">
                <h3> USUARIO </h3>
              </Link>
            </li>
          )}
        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
               <h3> {currentUser.username} </h3>
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                <h3>Salir</h3> 
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                <h3>Ingresar</h3>
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                <h3>Registrarse</h3>
              </Link>
            </li>
          </div>
        )}
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/user" component={BoardUser} />
    
        </Switch>
      </div>
    </div>
  );
};

export default App;