import EmailForm from "components/EmailForm";
import Footer from "components/Footer";
import Header from "components/Header";
import QuemSouEu from "components/QuemSouEu";
import React from "react";
import { MetaTags } from "react-meta-tags";
import { Col, Container, Row } from "reactstrap";

class CursoPro extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <div ref="main">
        <MetaTags>
          <title>
            Crie seu negócio online de impressão 3D - Alexandre Betioli
          </title>
          <meta
            name="description"
            content="Treinamento para quem não tem tempo a perder e quer começar a lucrar com impressão 3D."
          />
        </MetaTags>

        <Header />
        <section className="section black">
          <Container>
            <Row>
              <Col lg="6">
                <h1>
                  Crie seu <span className="text-primary">negócio online</span>{" "}
                  de impressão 3D
                </h1>
                <p className="lead">
                  Treinamento para quem não tem tempo a perder e quer começar a
                  lucrar com impressão 3D
                </p>
                <p>
                  As matrículas serão abertas em breve, no dia{" "}
                  <span className="text-primary">15/05</span>. Não perca tempo e
                  se cadastre agora para receber mais informações sobre o curso.
                </p>

                <EmailForm
                  formId="1327091"
                  buttonText="Fazer minha pré-inscrição"
                  redirect="/obrigado-espera"
                />
              </Col>
              <Col lg="6">
                <img
                  alt="..."
                  src={require("assets/img/factory.jpg")}
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

export default CursoPro;
