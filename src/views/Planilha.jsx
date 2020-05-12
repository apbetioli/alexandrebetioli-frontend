import EmailForm from "components/EmailForm";
import Footer from "components/Footer";
import Header from "components/Header";
import React from "react";
import { Card, CardBody, CardImg, Col, Container, Row } from "reactstrap";

class Planilha extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <div ref="main">
        <Header />
        <section className="section">
          <Container>
            <Row>
              <Col lg="6">
                <h1>Receba a planilha em seu email gratuitamente</h1>
                <p className="lead">
                  Não deixe de assistir o vídeo onde eu explico o passo a passo
                  com todos os detalhes de como utilizar a planilha.
                </p>

                <script src="https://f.convertkit.com/ckjs/ck.5.js"></script>
                <form
                  action="https://app.convertkit.com/forms/1288625/subscriptions"
                  method="post"
                  data-sv-form="1288625"
                  data-uid="c9ad8e36ff"
                  data-version="5"
                  data-options='{"settings":{"after_subscribe":{"action":"redirect","success_message":"Sucesso! Now check your email to confirm your subscription.","redirect_url":"https://alexandrebetioli.com.br/obrigado-planilha"},"analytics":{"google":null,"facebook":null,"segment":null,"pinterest":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":false,"url":"https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form"},"recaptcha":{"enabled":true},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
                >
                  <EmailForm buttonText="Quero receber a planilha" />
                </form>
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
              <Col lg="12">
                <br />
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
