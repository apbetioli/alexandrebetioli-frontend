import EmailForm from "components/EmailForm";
import Footer from "components/Footer";
import Header from "components/Header";
import React from "react";
import { MetaTags } from "react-meta-tags";
import { Card, CardBody, CardImg, Col, Container, Row } from "reactstrap";
import View from "./View";

class Planilha extends View {
  render() {
    return (
      <div ref="main">
        <MetaTags>
          <title>Impressão 3D - Alexandre Betioli</title>
          <meta
            name="description"
            content="Aprenda a calcular o preço das suas impressões 3D e comece a ter lucro de verdade."
          />
          <meta
            name="keywords"
            content="impressão 3d,comunidade,3d printing,impressora 3d,fdm,sla,empreendedorismo,planilha"
          />
          <meta name="robots" content="index,follow"></meta>
        </MetaTags>

        <Header />
        <section className="section black">
          <Container>
            <Row>
              <Col lg="6">
                <h1>Receba a planilha em seu email gratuitamente</h1>
                <p>
                  Se inscreva para receber a planilha de cálculo de preços de
                  impressão 3D. Não deixe de assistir o vídeo onde eu explico o
                  passo a passo com todos os detalhes de como utilizar a
                  planilha.
                </p>

                <EmailForm
                  formId="1288625"
                  buttonText="Quero receber a planilha"
                  redirect="/obrigado-planilha"
                />
              </Col>
              <Col lg="6">
                <iframe
                  title="Video da planilha"
                  width="680"
                  height="390"
                  src="https://www.youtube.com/embed/cuMAMVkprDE"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section">
          <Container>
            <Row>
              <Col lg="12">
                <h2 className="centered">Por que baixar esta planilha?</h2>
              </Col>
              <Col lg="4">
                <Card className="shadow border-0">
                  <CardImg
                    top
                    width="100%"
                    src={require("assets/img/card-planilha-1.jpg")}
                    alt="..."
                  />
                  <CardBody className="py-5">
                    Não faça mais seus orçamentos de impressão 3D com base em
                    chutes ou estimativas sem embasamento.
                  </CardBody>
                </Card>
              </Col>
              <Col lg="4">
                <Card className="shadow border-0">
                  <CardImg
                    top
                    width="100%"
                    src={require("assets/img/card-planilha-2.jpg")}
                    alt="..."
                  />
                  <CardBody>
                    Em qualquer negócio é essencial que você saiba o custo real
                    do seu produto para poder vender por um preço que seja
                    justo, competitivo e que maximize o seu lucro.
                  </CardBody>
                </Card>
              </Col>
              <Col lg="4">
                <Card className="shadow border-0">
                  <CardImg
                    top
                    width="100%"
                    src={require("assets/img/card-planilha-3.jpg")}
                    alt="..."
                  />
                  <CardBody>
                    Com esta planilha você calculará exatamente os custos de
                    filamento, energia, depreciação, retorno sobre investimento,
                    acabamentos e muito mais.
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Planilha;
