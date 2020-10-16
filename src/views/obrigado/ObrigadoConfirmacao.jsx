import React from "react";
import Obrigado from "./Obrigado";

class ObrigadoConfirmacao extends React.Component {
  render() {
    return (
      <Obrigado title="Ação necessária!">
        <p className="lead">Siga os passos abaixo para confirmar seu email!</p>
        <ol>
          <li>
            Acesse seu email e cheque se recebeu o{" "}
            <strong>Confirme a Inscrição</strong>
          </li>
          <li>
            Caso não receba nos próximos 10 minutos, veja se ele caiu na caixa
            de <strong>SPAM ou LIXEIRA </strong>
            ou outras abas de Promoções e Atualizações para GMAIL. Às vezes o
            email cai lá automaticamente.
          </li>
          <li>
            Abra o email e <strong>clique no link de confirmação</strong>
          </li>
          <li>Pronto! Sua inscrição está confirmada!</li>
        </ol>

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

export default ObrigadoConfirmacao;
