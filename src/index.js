import "assets/scss/argon-design-system-react.scss";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "index.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Comunidade from "views/Comunidade";
import CursoProEspera from "views/curso/CursoProEspera";
import CursoProIncomodacao from "views/curso/CursoProIncomodacao";
import PreLancamento from "views/lancamento/PreLancamento";
import CursoPro from "views/CursoPro";
import CursoStarter from "views/CursoStarter";
import LandingPage from "views/LandingPage";
import Login from "views/Login";
import Obrigado from "views/obrigado/Obrigado";
import ObrigadoCompra from "views/obrigado/ObrigadoCompra";
import ObrigadoEspera from "views/obrigado/ObrigadoEspera";
import ObrigadoPlanilha from "views/obrigado/ObrigadoPlanilha";
import Planilha from "views/Planilha";
import * as serviceWorker from "./serviceWorker";
import Lancamento from "views/lancamento/Lancamento";

ReactDOM.render(
  <>
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/curso" exact component={CursoPro} />
        <Route path="/curso-espera" exact component={CursoProEspera} />
        <Route
          path="/curso-incomodacao"
          exact
          component={CursoProIncomodacao}
        />
        <Route path="/starter" exact component={CursoStarter} />
        <Route path="/comunidade" exact component={Comunidade} />
        <Route path="/planilha" exact component={Planilha} />
        <Route path="/login" exact component={Login} />
        <Route path="/obrigado-starter" exact component={Obrigado} />
        <Route path="/obrigado-espera" exact component={ObrigadoEspera} />
        <Route path="/obrigado-planilha" exact component={ObrigadoPlanilha} />
        <Route path="/obrigado-live" exact component={Obrigado} />
        <Route path="/obrigado-boleto" exact component={ObrigadoCompra} />
        <Route path="/obrigado-curso" exact component={ObrigadoCompra} />
        <Route path="/obrigado-paypal" exact component={ObrigadoCompra} />
        <Route
          path="/pl1"
          exact
          render={(props) => <PreLancamento {...props} active={"pl1"} />}
        />
        <Route
          path="/pl2"
          exact
          render={(props) => <PreLancamento {...props} active={"pl2"} />}
        />
        <Route path="/matriculas-abertas" exact component={Lancamento} />
        <Redirect to="/" />
      </Switch>
    </Router>
  </>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
