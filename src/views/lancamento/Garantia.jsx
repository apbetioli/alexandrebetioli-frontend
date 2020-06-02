import React from "react";
import { Col, Container, Row } from "reactstrap";

class Garantia extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col lg="3">
            <img
              className="hero-img"
              alt="..."
              src={require("assets/img/garantia2.png")}
            />
          </Col>
          <Col lg="9">
            <br />
            <h3>Faça sua matrícula tranquila</h3>
            <p>
              Se você seguir o método, colocar em prática, e em 30 dias achar
              que não teve nenhuma evolução, ou que o curso não é para você, é
              só mandar um e-mail e devolvemos todo o seu investimento, sem
              perguntas.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Garantia;
