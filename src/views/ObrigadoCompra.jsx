import Footer from "components/Footer";
import Header from "components/Header";
import React from "react";
import { ReactTitle } from "react-meta-tags";
import { Col, Container, Row } from "reactstrap";

class ObrigadoCompra extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <div ref="main">
        <ReactTitle title="Obrigado - Alexandre Betioli" />

        <Header />
        <section className="section">
          <Container>
            <Row>
              <Col lg="12">
                <h1>Muito obrigado!</h1>
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                {this.props.children}
                <p className="lead">
                  Parabéns! Sua inscrição foi concluída com sucesso!
                </p>
                <br />
                <p>
                  Você deu o primeiro passo rumo ao domínio desta tecnologia
                  incrível.{" "}
                </p>
                <p>
                  Em alguns minutos você receberá em seu email o acesso ao
                  curso, se você pagou por cartão de crédito.
                </p>
                <p>
                  Caso tenha sido pelo paypal, pode demorar um pouco mais pois
                  ele passa por uma análise antes.
                </p>
                <p>
                  Caso tenha pago por boleto você receberá em até 3 dias úteis
                  no seu email.
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
