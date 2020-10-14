import ActionButton from "components/ActionButton";
import Footer from "components/Footer";
import React from "react";
import Countdown from "react-countdown";
import { MetaTags } from "react-meta-tags";
import { Col, Container, Row } from "reactstrap";
import View from "views/View";
import Garantia from "./Garantia";

class Lancamento extends View {
  render() {
    let today = new Date();
    let videoURL = "https://www.youtube.com/embed/MY-aQo1LdUw?rel=0"; //with bonus
    let ctaText = "Quero fazer minha matrícula com R$ 200 de desconto";
    let hotlink = "https://pay.hotmart.com/Q23252637E?off=e7uj880s";
    let atencao = "Assista o video até o final antes de fazer sua matrícula!";

    if (today >= new Date("2020-10-20 00:00:00")) {
      videoURL = "https://www.youtube.com/embed/VpHIxJakIGc?rel=0";
      ctaText = "Quero fazer minha matrícula agora";
      hotlink = "https://pay.hotmart.com/Q23252637E?off=v8krlpzo";
    }

    let cta = (
      <Container>
        <Row>
          <Col lg="12">
            <ActionButton
              color="checkout"
              href={hotlink}
              text={ctaText}
              size="lg"
              block
            />
          </Col>
        </Row>
      </Container>
    );

    let countdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
      if (completed) {
        return <p>Matrículas encerradas!</p>;
      } else {
        if (days <= 2) {
          return (
            <>
              <Col lg="6" xs="12">
                <span className="h1 text-right d-none d-lg-block">
                  Faltam apenas:
                </span>
                <span className="d-lg-none">Faltam apenas:</span>
              </Col>
              <Col lg="1" xs="3">
                <span className="h1"> {days} </span>
                <div>dias</div>
              </Col>
              <Col lg="1" xs="3">
                <span className="h1"> {hours} </span>
                <div>horas</div>
              </Col>
              <Col lg="1" xs="3">
                <span className="h1"> {minutes} </span>
                <div>minutos</div>
              </Col>
              <Col lg="1" xs="3">
                <span className="h1"> {seconds} </span>
                <div>segundos</div>
              </Col>
            </>
          );
        } else {
          return (
            <Col lg="12">
              <p>{atencao}</p>
            </Col>
          );
        }
      }
    };

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
          <meta
            name="robots"
            content="index,follow,noarchive,noimageindex"
          ></meta>
        </MetaTags>

        <section className="section-sm black mt-0 pt-0 centered">
          <Container>
            <Row>
              <Countdown
                date={this.props.dates.end}
                renderer={countdownRenderer}
              />
              <Col lg="12">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    title="l1"
                    className="embed-responsive-item"
                    src={videoURL}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </div>
              </Col>
            </Row>
          </Container>
          {cta}
        </section>

        <section className="black">
          <Garantia />
        </section>

        <Footer />
      </div>
    );
  }
}
export default Lancamento;
