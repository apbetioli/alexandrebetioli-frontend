import React from "react";
import Obrigado from "./Obrigado";

class ObrigadoPlanilha extends React.Component {
  render() {
    return (
      <Obrigado>
        <p className="lead">
          A planilha está sendo encaminhada para o seu email neste momento.
        </p>
        <p>
          Caso não receba nos próximos 10 minutos, veja se ele caiu na caixa de{" "}
          <strong>SPAM ou LIXEIRA </strong>
          ou outras abas de Promoções e Atualizações para GMAIL. Às vezes o
          email cai lá automaticamente.
        </p>
        <p>
          Qualquer dúvida entre em contato pelo email
          <a href="mailto:contato@alexandrebetioli.com.br">
            {" "}
            contato@alexandrebetioli.com.br
          </a>
        </p>
      </Obrigado>
    );
  }
}

export default ObrigadoPlanilha;
