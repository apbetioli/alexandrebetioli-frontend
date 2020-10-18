import "assets/scss/argon-design-system-react.scss";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "index.css";
import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import Comunidade from "views/Comunidade";
import Quiz from "views/curso/Quiz";
import CursoPro from "views/CursoPro";
import CursoStarter from "views/CursoStarter";
import Lancamento from "views/lancamento/LancamentoMairo";
import PreLancamento from "views/lancamento/PreLancamento";
import LandingPage from "views/LandingPage";
import Login from "views/Login";
import ConfirmacaoLista from "views/obrigado/ConfirmacaoLista";
import ObrigadoCompra from "views/obrigado/ObrigadoCompra";
import ObrigadoEspera from "views/obrigado/ObrigadoEspera";
import ObrigadoPlanilha from "views/obrigado/ObrigadoPlanilha";
import Planilha from "views/Planilha";
import * as serviceWorker from "./serviceWorker";

const dates = {
  pl1: new Date("2020-10-19 09:00:00"),
  pl2: new Date("2020-10-19 09:00:00"),
  start: new Date("2020-10-19 09:00:00"),
  end: new Date("2020-10-23 23:59:00"),
};

const lancamento_debug_render = (props) => {
  return <Lancamento {...props} dates={dates} />;
};

const curso_render = (props) => {
  let today = new Date();
  if (today >= dates.start && today < dates.end) {
    return <Lancamento {...props} dates={dates} />;
  }
  if (today < dates.start || today >= dates.end) {
    return <CursoPro {...props} dates={dates} />;
  }
};

const obrigado_curso_render = (props) => {
  let today = new Date();

  if (today >= dates.pl1 && today < dates.start) {
    return <PreLancamento {...props} active={"pl1"} dates={dates} />;
  } else {
    return <ObrigadoEspera />;
  }
};

ReactDOM.render(
  <>
    <Router>
      <Switch>
        <Route path="/" exact render={curso_render} />
        <Route path="/home" exact component={LandingPage} />
        <Route path="/curso" exact render={curso_render} />
        <Route path="/starter" exact component={CursoStarter} />
        <Route path="/comunidade" exact component={Comunidade} />
        <Route path="/planilha" exact component={Planilha} />
        <Route path="/matriculas-abertas" exact render={curso_render} />
        <Route path="/lancamento" exact render={lancamento_debug_render} />
        <Route path="/login" exact component={Login} />
        <Route path="/obrigado-starter" exact component={ObrigadoEspera} />
        <Route path="/obrigado-planilha" exact component={ObrigadoPlanilha} />0
        <Route path="/obrigado-boleto" exact component={ObrigadoCompra} />
        <Route path="/obrigado-curso" exact component={ObrigadoCompra} />
        <Route path="/obrigado-paypal" exact component={ObrigadoCompra} />
        <Route path="/obrigado-espera" exact render={obrigado_curso_render} />
        <Route
          path="/pl1"
          exact
          render={(props) => (
            <PreLancamento {...props} active={"pl1"} dates={dates} />
          )}
        />
        <Route
          path="/pl2"
          exact
          render={(props) => (
            <PreLancamento {...props} active={"pl2"} dates={dates} />
          )}
        />
        <Route path="/quiz" exact component={Quiz} />
        <Route path="/confirmacao-lista" exact component={ConfirmacaoLista} />
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
