import BrightnessHigh from "@material-ui/icons/BrightnessHigh";
import BrightnessLow from "@material-ui/icons/BrightnessLow";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Col, Container, Row } from "reactstrap";

class Bonus extends React.Component {
  render() {
    let iconStyle = { background: "rgb(0, 197, 108)", color: "#fff" };
    return (
      <Container>
        <Row>
          <Col lg="12">
            <h2 className="centered">
              Bônus <span className="checkout">imperdíveis</span>
            </h2>
          </Col>
          <Col lg="12">
            <VerticalTimeline animate={false}>
              <VerticalTimelineElement
                iconStyle={iconStyle}
                icon={<BrightnessHigh />}
              >
                <h4 className="vertical-timeline-element-title">
                  Marketing na prática
                </h4>
                <p>
                  Cobriremos tudo o que você deve saber sobre o marketing de
                  produtos visando principalmente as redes sociais. Você
                  aprenderá e fará na prática uma campanha de anúncios para o
                  seu público alvo. Eu garanto para você que só este bônus já
                  vale mais que o valor pago pelo curso todo.
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
                  Vou dar dicas que eu aprendi na prática sobre economia de
                  frete e material e otimizações que podem te economizar tempo,
                  afim de aumentar o seu lucro.
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
