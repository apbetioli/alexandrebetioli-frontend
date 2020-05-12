import Footer from "components/Footer";
import Header from "components/Header";
import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import { ReactTitle } from "react-meta-tags";

class Obrigado extends React.Component {
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

                <Button
                  className="background-color-discord"
                  href="https://discord.gg/sVXPeBn"
                  target="_blank"
                >
                  Acessar comunidade
                </Button>
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

export default Obrigado;
