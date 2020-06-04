import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardText,
  Col,
  Container,
  Row,
} from "reactstrap";

class Testemunhos extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col lg="12">
            <div className="centered">
              <h2>Veja o que as pessoas que me acompanham estão dizendo</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="6">
            <Card>
              <CardBody>
                <CardText>
                  "Gostei do video pois vc vai direto ao ponto no que pretende
                  no titulo, e se o curso que vc pretende fazer for nesse nivel
                  vai ser muito bom."
                </CardText>
              </CardBody>
              <CardFooter>Adriano Barros</CardFooter>
            </Card>
          </Col>
          <Col lg="6">
            <Card>
              <CardBody>
                <CardText>
                  Alexandre, só de vc disponibilizar vídeos e dicas sobre a
                  impressão 3d já me ajudou a renovar o desejo de aprender tal
                  arte!!
                </CardText>
              </CardBody>
              <CardFooter>Flavio Cesar de Almeida Santos</CardFooter>
            </Card>
          </Col>
          <Col lg="6">
            <Card>
              <CardBody>
                <CardText>
                  "Apresenta conteúdos atualizados, didáticos, e muito bem
                  detalhados. Excelente profissional com grande expertise no
                  mercado da impressão 3D. "
                </CardText>
              </CardBody>
              <CardFooter>Wilian Sandrini</CardFooter>
            </Card>
          </Col>
          <Col lg="6">
            <Card>
              <CardBody>
                <CardText>
                  Mostra um grande conhecimento do assunto e facilidade de
                  repassar esse conhecimento
                </CardText>
              </CardBody>
              <CardFooter>Ismael de Azevedo Moura</CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <br />
            <Card>
              <CardBody>
                <CardText>
                  "Em vários cursos que já realizei nunca recebi uma assistência
                  tão bacana quanto com o Alexandre, que expus a minha dúvida e
                  o meu problema e o mesmo realizou testes e me ajudou a
                  identificar o problema. Após isso consegui realizar as
                  mudanças necessárias e o problema já não existe mais. Assim
                  tbm como definir o custo de meu trabalho. Aí percebemos quando
                  a pessoa entende e fala com clareza aquilo que ensina. Só
                  tenho aprendido desde que comecei a acompanhá-lo."
                </CardText>
              </CardBody>
              <CardFooter>Eduardo José Rogério Nunes</CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Testemunhos;
