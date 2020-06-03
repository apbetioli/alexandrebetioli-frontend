import "assets/scss/argon-design-system-react.scss";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "index.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Comunidade from "views/Comunidade";
import CursoPro from "views/CursoPro";
import CursoStarter from "views/CursoStarter";
import Lancamento from "views/lancamento/Lancamento";
import PreLancamento from "views/lancamento/PreLancamento";
import LandingPage from "views/LandingPage";
import Login from "views/Login";
import Obrigado from "views/obrigado/Obrigado";
import ObrigadoCompra from "views/obrigado/ObrigadoCompra";
import ObrigadoEspera from "views/obrigado/ObrigadoEspera";
import ObrigadoPlanilha from "views/obrigado/ObrigadoPlanilha";
import Planilha from "views/Planilha";
import * as serviceWorker from "./serviceWorker";

const dates = {
  pre_launch: new Date("2020-06-12 08:00:00"),
  start: new Date("2020-06-15 08:00:00"),
  end: new Date("2020-06-22 00:00:00"),
};

const curso_render = (props) => {
  let today = new Date();
  if (today >= dates.start && today < dates.end) {
    return <Lancamento />;
  }
  if (today < dates.start || today >= dates.end) {
    return <CursoPro />;
  }
};

const obrigado_curso_render = (props) => {
  let today = new Date();

  if (today >= dates.pre_launch && today < dates.start) {
    return <PreLancamento />;
  } else {
    return <ObrigadoEspera />;
  }
};

ReactDOM.render(
  <>
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/curso" exact render={curso_render} />
        <Route path="/starter" exact component={CursoStarter} />
        <Route path="/comunidade" exact component={Comunidade} />
        <Route path="/planilha" exact component={Planilha} />
        <Route path="/pl" exact component={PreLancamento} />} />
        <Route path="/matriculas-abertas" exact render={curso_render} />
        <Route path="/lancamento" exact component={Lancamento} />
        <Route path="/login" exact component={Login} />
        <Route path="/obrigado-starter" exact component={Obrigado} />
        <Route path="/obrigado-planilha" exact component={ObrigadoPlanilha} />
        <Route path="/obrigado-live" exact component={Obrigado} />
        <Route path="/obrigado-boleto" exact component={ObrigadoCompra} />
        <Route path="/obrigado-curso" exact component={ObrigadoCompra} />
        <Route path="/obrigado-paypal" exact component={ObrigadoCompra} />
        <Route path="/obrigado-espera" exact render={obrigado_curso_render} />
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
