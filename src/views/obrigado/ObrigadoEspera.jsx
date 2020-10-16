import React from "react";
import Obrigado from "./Obrigado";

class ObrigadoEspera extends React.Component {
  render() {
    return (
      <Obrigado title="Obrigado!">
        <p>Em breve você receberá mais informações no seu email!</p>
      </Obrigado>
    );
  }
}

export default ObrigadoEspera;
