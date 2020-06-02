import React from "react";
import PreLancamento from "../lancamento/PreLancamento";
import Obrigado from "./Obrigado";

class ObrigadoEspera extends React.Component {
  render() {
    let page;
    if (new Date() > new Date("2020-06-15 00:00:00")) {
      page = <Obrigado />;
    } else {
      page = <PreLancamento />;
    }

    return page;
  }
}

export default ObrigadoEspera;
