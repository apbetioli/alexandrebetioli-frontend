import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss";
import 'index.css';

import LandingPage from "views/LandingPage";
import CursoPro from "views/CursoPro";
import CursoStarter from "views/CursoStarter";
import Planilha from "views/Planilha";
import Login from "views/Login";
import Obrigado from "views/Obrigado";
import Header from "components/Header";
import Footer from "components/Footer";

ReactDOM.render(
  <>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact render={(props) => <LandingPage {...props} />} />
        <Route path="/curso" exact render={(props) => <CursoPro {...props} />} />
        <Route path="/starter" exact render={(props) => <CursoStarter {...props} />} />
        <Route path="/planilha" exact render={(props) => <Planilha {...props} />} />
        <Route path="/login" exact render={(props) => <Login {...props} />} />
        <Route path="/obrigado-espera" exact render={(props) => <Obrigado {...props} />} />
        <Route path="/obrigado-planilha" exact render={(props) => <Obrigado {...props} />} />
        <Route path="/obrigado-live" exact render={(props) => <Obrigado {...props} />} />
        <Redirect to="/" />
      </Switch>
      <Footer/>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

