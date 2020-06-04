import React from "react";
import { Button, Card, CardBody, Col, Container, Row, UncontrolledCollapse } from "reactstrap";

class FAQ extends React.Component {
  render() {
    return (
      <Col lg="12">
        <Button
          id={this.props.id}
          color="info"
          outline
          block
          className="btn-faq"
        >
          {this.props.question}
        </Button>
        <UncontrolledCollapse toggler={"#" + this.props.id}>
          <Card>
            <CardBody>{this.props.children}</CardBody>
          </Card>
        </UncontrolledCollapse>
      </Col>
    );
  }
}

class FAQs extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col lg="12">
            <h3 className="centered">F.A.Q. - PERGUNTAS FREQUENTES</h3>
          </Col>
          <FAQ id="q2" question="Pra quem é esse curso?">
            Este curso é para quem quer começar a ter uma renda com impressão
            3D. Se você ainda não teve contato com a impressão 3D, o curso conta
            com bônus de aulas introdutórias de impressão e como escolher sua
            impressora para que você tenha tudo em mãos pra começar a vender.
          </FAQ>
          <FAQ id="q9" question="Preciso de uma impressora 3D?">
            Não necessariamente. O curso é focado no aspecto operacional do
            negócio de impressão 3D. Uma impressora será necessária para criar
            os produtos para a venda. Se você tiver uma parceria com alguém que
            fará a impressão, você pode fazer o curso todo sem ter uma
            impressora.
          </FAQ>
          <FAQ id="q10" question="Preciso saber modelagem 3D?">
            Não. Existem muitos modelos 3D grátis e pagos disponíveis em vários
            sites que você pode usar para impressão e venda. A modelagem 3D é um
            diferencial que você pode ter para vender produtos exclusivos.
          </FAQ>
          <FAQ id="q4" question="Por quanto tempo vou ter acesso?">
            Pelo tempo que for necessário. O curso não expira. Portanto sempre
            que quiser você poderá voltar e revisitar o curso.
          </FAQ>
          <FAQ id="q5" question="O curso emite certificado?">
            Sim ao término do curso você irá receber o certificado de conclusão
            caso tenha tido pelo menos uma venda.
          </FAQ>
          <FAQ id="q6" question="Como posso tirar minhas dúvidas?">
            Cada aula possui uma área para dúvidas na plataforma de conteúdo e
            você também poderá tirar dúvidas na comunidade exclusiva do curso.
          </FAQ>
          <FAQ id="q1" question="Como será entregue?">
            O curso é online e em vídeo, disponibilizado através de uma
            plataforma especializada em ensino à distância. As aulas e os
            módulos são liberados ao longo dos 3 meses iniciais.
          </FAQ>
          <FAQ id="q7" question="Quais são os horários das aulas? ">
            O curso será gravado e você poderá assistir a qualquer momento que
            quiser, quantas vezes quiser e de onde quiser, desde que tenha uma
            conexão com a internet. As lives de acompanhamento também ficarão
            gravadas.
          </FAQ>
          <FAQ id="q8" question="Quais são as formas de pagamento?">
            Você poderá pagar por boleto ou no cartão de crédito. À vista ou
            parcelado em até 12x no cartão de crédito. Você também pode utilizar
            dois cartões para somar os limites dos dois, se desejar.
          </FAQ>
          <Col lg="12">
            Restou alguma dúvida? Mande um email para
            <a href="mailto:contato@alexandrebetioli.com.br">
              <strong>
                <span className="text-info">
                  {" "}
                  contato@alexandrebetioli.com.br
                </span>
              </strong>
            </a>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FAQs;
