import ActionButton from "components/ActionButton";
import Footer from "components/Footer";
import Header from "components/Header";
import React from "react";
import { MetaTags } from "react-meta-tags";
import { Button, Col, Container, Row } from "reactstrap";

class Obrigado extends React.Component {
  render() {
    return (
      <div>
        <MetaTags>
          <title>Obrigado - Alexandre Betioli</title>
          <meta name="robots" content="noindex,nofollow"></meta>
        </MetaTags>

        <Header />
        <section className="section">
          <Container>
            <Row>
              <Col lg="12">
                <h1>{this.props.title}</h1>
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                {this.props.children}
                <p className="lead">Enquanto isso...</p>
              </Col>
            </Row>
            <Row>
              <Col lg="6">
                <h2>
                  <i className="fa fa-discord color-discord" />
                  <span> Participe da comunidade</span>
                </h2>

                <p>
                  Potencialize o seu aprendizado. Tire suas dúvidas e interaja
                  com outros profissionais do mercado de impressão 3D.
                </p>

                <ActionButton color="discord" to="/comunidade" />
              </Col>
              <Col lg="6" className="d-none">
                <h2>
                  <i className="fa fa-telegram color-telegram" />
                  <span> Junte-se no Telegram</span>
                </h2>

                <p>
                  Clique abaixo e cadastre-se para receber avisos e atualizações
                  de aulas e novos conteúdos através do meu canal exclusivo no
                  Telegram.
                </p>

                <Button
                  className="background-color-telegram"
                  href="https://t.me/alexandrebetioli3d"
                  target="_blank"
                >
                  Acessar o Telegram
                </Button>
              </Col>
              <Col lg="6">
                <h3>
                  <i className="fa fa-youtube color-youtube" /> Inscreva-se no{" "}
                  <span className="color-youtube">YouTube</span>
                </h3>
                <p>
                  E para aprender mais sobre impressão 3D se inscreva no meu
                  canal do Youtube onde posto novos conteúdos toda semana.
                </p>
                <Button
                  color="youtube"
                  href="https://www.youtube.com/channel/UCsW8AqQR62iwXoiWYfe-ovA?sub_confirmation=1"
                  target="_blank"
                >
                  Inscrever-se no YouTube
                </Button>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </div>
    );
  }
}
Obrigado.defaultProps = {
  title: "Yesss!",
};

export default Obrigado;
