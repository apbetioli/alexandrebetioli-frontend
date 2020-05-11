import React from "react";

import { Container, Row, Col } from "reactstrap";

import ActionButton from "components/ActionButton";
import Header from "components/Header";
import Footer from "components/Footer";

class Obrigado extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <div ref="main">
        <Header />
        <section className="section">
          <Container>
            <Row>
              <Col lg="12">
                <h1>Próximos passos...</h1>
                <br />
              </Col>
            </Row>
            <Row>
              <Col lg="6">
                <h2>
                  <i className="fa fa-discord color-discord" />
                  <span> Participe da comunidade</span>
                </h2>

                <p className="lead">
                  Potencialize o seu aprendizado. Tire suas dúvidas e interaja
                  com outros profissionais do mercado de impressão 3D.
                </p>

                <ActionButton
                  text="Acessar comunidade"
                  className="background-color-discord"
                  href="https://discord.gg/EZJgchr"
                  target="_blank"
                />
              </Col>
              <Col lg="6">
                <h3>
                  <i className="fa fa-youtube color-youtube" /> Inscreva-se no{" "}
                  <span className="color-youtube">YouTube</span>
                </h3>
                <p className="lead">
                  E para aprender mais sobre impressão 3D se inscreva no meu
                  canal do Youtube onde posto novos conteúdos toda semana.
                </p>
                <ActionButton
                  text="Inscrever-se no YouTube"
                  color="youtube"
                  href="https://www.youtube.com/channel/UCsW8AqQR62iwXoiWYfe-ovA?sub_confirmation=1"
                  target="_blank"
                />
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Obrigado;
