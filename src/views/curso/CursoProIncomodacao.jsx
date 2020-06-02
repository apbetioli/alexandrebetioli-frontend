import EmailForm from "components/EmailForm";
import Footer from "components/Footer";
import QuemSouEu from "components/QuemSouEu";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import Header from "components/Header";

class CursoProIncomodacao extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <section className="section black centered">
          <Container>
            <Row>
              <Col lg="12">
                <h1>
                  Crie seu <span className="text-primary">negócio online</span>{" "}
                  de impressão 3D
                </h1>
                <p className="lead">
                  Treinamento para quem não tem tempo a perder e quer
                  <span className="text-primary">
                    {" "}
                    começar a lucrar com impressão 3D
                  </span>
                </p>
                <p>Digite seu email para ter acesso aos vídeos</p>

                <form
                  action="https://app.convertkit.com/forms/1327091/subscriptions"
                  method="post"
                >
                  <EmailForm buttonText="Clique para assistir" />
                </form>
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

export default CursoProIncomodacao;
