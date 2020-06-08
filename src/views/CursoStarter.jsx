import EmailForm from "components/EmailForm";
import Footer from "components/Footer";
import Header from "components/Header";
import QuemSouEu from "components/QuemSouEu";
import React from "react";
import { MetaTags } from "react-meta-tags";
import { Col, Container, Row } from "reactstrap";

class CursoStarter extends React.Component {
  render() {
    return (
      <div>
        <MetaTags>
          <title>Aulas gratuitas de impressão 3D - Alexandre Betioli</title>
          <meta
            name="description"
            content="Comece a explorar tudo o que a impressão 3D tem a te oferecer com estas aulas gratuitas."
          />
        </MetaTags>

        <Header />
        <section className="section black">
          <Container>
            <Row>
              <Col lg="6">
                <h1>
                  Curso <span className="text-primary">STARTER</span> de
                  impressão 3D
                </h1>
                <p className="lead">
                  Estou preparando um super curso para iniciantes na impressão
                  3D e vai ser{" "}
                  <span className="text-primary">totalmente gratuito</span>.
                </p>
                <p>
                  Cadastre-se para ser avisado quando o curso estiver
                  disponível!
                </p>

                <EmailForm formId="1386818" redirect="/obrigado-starter" />
              </Col>
              <Col lg="6" className="centered">
                <img
                  alt="..."
                  src={require("assets/img/starter.png")}
                  className="hero-img"
                />
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section">
          <QuemSouEu />
        </section>
        <Footer />
      </div>
    );
  }
}

export default CursoStarter;
