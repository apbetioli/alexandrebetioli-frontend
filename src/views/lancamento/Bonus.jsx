import BrightnessHigh from "@material-ui/icons/BrightnessHigh";
import BrightnessLow from "@material-ui/icons/BrightnessLow";
import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Col, Container, Row } from "reactstrap";

class Bonus extends React.Component {
  render() {
    let iconStyle = { background: "rgb(0, 197, 108)", color: "#fff" };
    return (
      <Container>
        <Row>
          <Col lg="12">
            <h2 className="centered">Bônus imperdíveis</h2>
          </Col>
          <Col lg="12">
            <VerticalTimeline animate={false}>
              <VerticalTimelineElement
                iconStyle={iconStyle}
                icon={<BrightnessHigh />}
              >
                <h4 className="vertical-timeline-element-title">
                  Acompanhamento
                </h4>
                <p>
                  Vou fazer uma acompanhamento individual do seu negócio e
                  ajudar você a seguir na direção certa!
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                iconStyle={iconStyle}
                icon={<BrightnessLow />}
              >
                <h4 className="vertical-timeline-element-title">Marketplace</h4>
                <p>
                  Vou conectar você com seu clientes através do meu marketplace.
                  E todo o marketing é por minha conta!
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                iconStyle={iconStyle}
                icon={<BrightnessHigh />}
              >
                <h4 className="vertical-timeline-element-title">Comunidade</h4>
                <p>
                  Você terá acesso à uma comunidade com minha equipe e outros
                  alunos para tirar dúvidas e compartilhar experiências.
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                iconStyle={iconStyle}
                icon={<BrightnessLow />}
              >
                <h4 className="vertical-timeline-element-title">
                  Como ser super eficiente
                </h4>
                <p>
                  Vou ensinar como você pode automatizar partes da sua produção
                  para ganhar tempo. E também como criar e gerenciar uma micro
                  fazenda de impressão.
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Bonus;
