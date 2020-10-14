import Footer from "components/Footer";
import Header from "components/Header";
import React from "react";
import { MetaTags } from "react-meta-tags";
import { Col, Container, Row } from "reactstrap";

class ObrigadoCompra extends React.Component {
  render() {
    return (
      <div>
        <MetaTags>
          <title>Obrigado - Alexandre Betioli</title>
          <meta name="robots" content="noindex,nofollow"></meta>
        </MetaTags>

        <section className="section">
          <Container>
            <Row>
              <Col lg="12">
                <h1>Parabéns!</h1>
                <p className="lead">
                  A sua inscrição foi concluída com sucesso!
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                {this.props.children}
                <p className="lead">Atenção!</p>
                <p>
                  Em alguns minutos a <strong>Hotmart</strong> enviará para seu
                  email o acesso ao curso, se você pagou por{" "}
                  <strong>cartão de crédito</strong>.
                </p>
                <p>
                  Caso tenha pago por <strong>boleto</strong> você receberá o
                  acesso em até <strong>3 dias úteis </strong> no seu email.
                </p>
                <p>
                  Qualquer dúvida entre em contato pelo email{" "}
                  <a href="mailto:contato@alexandrebetioli.com.br">
                    contato@alexandrebetioli.com.br
                  </a>
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <p className="lead">Próximos passos...</p>
                <ul>
                  <li>
                    Acesse seu email e cheque se recebeu os dados de acesso
                  </li>
                  <li>
                    Caso não esteja lá, veja se ele caiu na caixa de SPAM ou
                    LIXEIRA ou outras abas para GMAIL. Às vezes o email cai lá
                    automaticamente.
                  </li>
                  <li>
                    Assista ao treinamento com muita atenção e não pule o módulo
                    1 pois contém informações importantes.
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </div>
    );
  }
}

export default ObrigadoCompra;
