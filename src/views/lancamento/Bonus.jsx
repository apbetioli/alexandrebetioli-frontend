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
                icon={<BrightnessLow />}
              >
                <h3 className="vertical-timeline-element-title">
                  Introdução à impressão 3D
                </h3>
                <p>
                  Para quem nunca teve contato com a impressão 3D e quer começar
                  com o pé direito, vou ensinar como escolher uma impressora 3D
                  e te guiar até a sua primeira impressão.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                iconStyle={iconStyle}
                icon={<BrightnessHigh />}
              >
                <h3 className="vertical-timeline-element-title">
                  Acompanhamento
                </h3>
                <p>
                  Vou fazer uma acompanhamento individual do seu negócio e
                  ajudar você a seguir na direção certa!
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                iconStyle={iconStyle}
                icon={<BrightnessLow />}
              >
                <h3 className="vertical-timeline-element-title">Marketplace</h3>
                <p>
                  Vou conectar você com seu cliente através do meu marketplace.
                  E todo o marketing é por minha conta!
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                iconStyle={iconStyle}
                icon={<BrightnessLow />}
              >
                <h3 className="vertical-timeline-element-title">Comunidade</h3>
                <p>
                  Você terá acesso à uma comunidade com minha equipe e outros
                  alunos para tirar dúvidas e compartilhar experiências.
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                iconStyle={iconStyle}
                icon={<BrightnessLow />}
              >
                <h3 className="vertical-timeline-element-title">
                  Como ser super eficiente
                </h3>
                <p>
                  Vou ensinar como você pode automatizar partes da sua produção
                  para ganhar tempo. E também como criar e gerenciar uma micro
                  fazenda de impressão.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                iconStyle={iconStyle}
                icon={<BrightnessHigh />}
              >
                <h3 className="vertical-timeline-element-title">
                  Outras oportunidades
                </h3>
                <p>
                  Além de e-commerce há muitas outras oportunidades na impressão
                  3D que eu vou explorar neste material.
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
