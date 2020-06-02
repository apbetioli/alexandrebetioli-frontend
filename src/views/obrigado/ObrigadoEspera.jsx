import React from "react";
import Obrigado from "./Obrigado";

class ObrigadoEspera extends React.Component {
  render() {
    return (
      <Obrigado>
        <p>
          Um email com mais informações está sendo encaminhada para o seu email cadastrado neste momento.
        </p>
        <p>Se não chegar em 10 minutos verifique sua caixa de spam.</p>
        <p>
          Qualquer dúvida entre em contato pelo email 
          <a href="mailto:contato@alexandrebetioli.com.br"> contato@alexandrebetioli.com.br</a>
        </p>
      </Obrigado>
    );
  }
}

export default ObrigadoEspera;
