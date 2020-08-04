import React from "react";
import Obrigado from "./Obrigado";

class ConfirmacaoLista extends React.Component {
  render() {
    return (
      <Obrigado title="Confirmado!">
        <p className="lead">
          Obrigado! Sua participação na minha lista de emails VIP está
          confirmada.
        </p>
        <p>
          A partir de agora você receberá o melhor conteúdo de impressão 3D e
          empreendedorismo direto na sua caixa de entrada.
        </p>
      </Obrigado>
    );
  }
}

export default ConfirmacaoLista;
