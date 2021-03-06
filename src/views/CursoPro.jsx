import EmailForm from "components/EmailForm";
import Footer from "components/Footer";
import QuemSouEu from "components/QuemSouEu";
import { format } from "date-fns";
import React from "react";
import { MetaTags } from "react-meta-tags";
import { Col, Container, Row } from "reactstrap";
import View from "./View";

class CursoPro extends View {
  render() {
    let hoje = new Date();
    let formatted_start = format(this.props.dates.start, "dd/MM 'às' HH'h'");

    let buttonText = "Fazer minha pré-inscrição";
    let description = (
      <p>
        As matrículas serão abertas em breve, no dia
        <span className="text-primary"> {formatted_start}</span>. Não perca
        tempo e se cadastre agora para receber mais informações sobre o curso.
      </p>
    );

    if (hoje > this.props.dates.pl1) {
      buttonText = "Assistir ao primeiro vídeo";
    }

    if (hoje > this.props.dates.pl2) {
      buttonText = "Assistir aos vídeos";
    }

    if (hoje > this.props.dates.end) {
      description = (
        <p>
          <span className="text-primary">Inscrições encerradas! </span>Faça sua
          inscrição para ser avisado da próxima turma.
        </p>
      );
      buttonText = "Quero ser avisado";
    }

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
          <meta
            name="keywords"
            content="impressão 3d,comunidade,3d printing,impressora 3d,fdm,sla,empreendedorismo,planilha,curso,aula,grátis"
          />
          <meta name="robots" content="index,follow"></meta>
        </MetaTags>

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

                {description}

                <EmailForm
                  formId="1327091"
                  buttonText={buttonText}
                  redirect="/obrigado-espera"
                  tag="ESPERA"
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
