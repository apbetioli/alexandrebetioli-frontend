import BrightnessHigh from "@material-ui/icons/BrightnessHigh";
import BrightnessLow from "@material-ui/icons/BrightnessLow";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Col, Container, Row } from "reactstrap";

class Conteudo extends React.Component {
  render() {
    let iconStyle = { background: "rgb(33, 150, 243)", color: "#fff" };
    return (
      <Container>
        <Row>
          <Col lg="12">
            <h2 className="centered">Conteúdo do curso</h2>
          </Col>
          <Col lg="12">
            <VerticalTimeline animate={false}>
              <VerticalTimelineElement
                iconStyle={iconStyle}
                icon={<BrightnessHigh />}
              >
                <h3 className="vertical-timeline-element-title">
                  Empreendedorismo
                </h3>
                <p>
                  Vou dar uma aula sobre os requisitos necessários para ser um
                  empreendedor de sucesso.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                iconStyle={iconStyle}
                icon={<BrightnessLow />}
              >
                <h3 className="vertical-timeline-element-title">
                  Como definir o que vender
                </h3>
                <p>
                  Vou ajudar a você definir o que vender, pra quem vender e como
                  obter modelos para impressão que possam ser vendidos
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                iconStyle={iconStyle}
                icon={<BrightnessLow />}
              >
                <h3 className="vertical-timeline-element-title">
                  Como definir o seu preço de venda
                </h3>
                <p>
                  Vou ensinar como fazer o cálculo correto do preço do seu
                  produto para você ter lucro de verdade com a venda.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                iconStyle={iconStyle}
                icon={<BrightnessHigh />}
              >
                <h3 className="vertical-timeline-element-title">
                  Como encontrar clientes
                </h3>
                <p>
                  Além de ter o seu produto você precisa de quem o compre, para
                  isso vou te ensinar como encontrar o seu cliente.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                iconStyle={iconStyle}
                icon={<BrightnessHigh />}
              >
                <h3 className="vertical-timeline-element-title">
                  Presença online
                </h3>
                <p>
                  Neste módulo eu vou te ensinar como estabelecer sua presença
                  online. Você vai aprender passo a passo como a criar sua loja
                  virtual para vendas em redes sociais, tudo sobre vender em
                  marketplaces e como criar o seu próprio e-commerce com
                  domínio, meios de pagamento e tudo mais. Tudo isso sem
                  precisar saber programação.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                iconStyle={iconStyle}
                icon={<BrightnessLow />}
              >
                <h3 className="vertical-timeline-element-title">
                  Venda online
                </h3>
                <p>
                  Como gerenciar as suas vendas, estoque, produção. Como
                  economizar tempo e dinheiro com frete.
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Conteudo;
