import BatteryCharging20Icon from "@material-ui/icons/BatteryCharging20";
import BatteryCharging30Icon from "@material-ui/icons/BatteryCharging30";
import BatteryCharging50Icon from "@material-ui/icons/BatteryCharging50";
import BatteryCharging80Icon from "@material-ui/icons/BatteryCharging80";
import BatteryChargingFullIcon from "@material-ui/icons/BatteryChargingFull";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
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
            <VerticalTimelineElement
              iconStyle={iconStyle}
              icon={<BatteryCharging20Icon />}
            >
              <h4 className="vertical-timeline-element-title">
                Empreendedor de sucesso
              </h4>
              <p>
                Você aprenderá quais são as características e comportamentos de
                empreendedores de sucesso, as quais serão exploradas durante
                todo o curso, e fará um teste para descobrir o seu perfil
                empreendedor que mostrará a você quais são as características e
                comportamentos que você domina e as que você precisa trabalhar
                mais.
              </p>
            </VerticalTimelineElement>

            <VerticalTimeline animate={false}>
              <VerticalTimelineElement
                iconStyle={iconStyle}
                icon={<BatteryCharging30Icon />}
              >
                <h4 className="vertical-timeline-element-title">
                  O que vender e pra quem vender?
                </h4>
                <p>
                  Vou ajudar a você definir o que vender, pra quem vender e como
                  obter modelos para impressão que possam ser vendidos.
                  Utilizaremos ferramentas que ajudarão você a definir o seu
                  nicho de produtos e o seu público alvo.
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                iconStyle={iconStyle}
                icon={<BatteryCharging50Icon />}
              >
                <h4 className="vertical-timeline-element-title">
                  Modelando seu negócio
                </h4>
                <p>
                  Continuaremos utilizando mais ferramentas para definição do
                  restante do seu negócio, e ao final fechamos a etapa de
                  planejamento e você estará pronto para colocar seu negócio
                  para rodar.
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                iconStyle={iconStyle}
                icon={<BatteryCharging80Icon />}
              >
                <h4 className="vertical-timeline-element-title">
                  Como definir o seu preço de venda
                </h4>
                <p>
                  Eu vou ensinar como definir corretamente o custo e preço do
                  seu produto para você ter lucro de verdade com a venda.
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                iconStyle={iconStyle}
                icon={<BatteryCharging80Icon />}
              >
                <h4 className="vertical-timeline-element-title">
                  Presença online - 3 módulos
                </h4>
                <p>
                  O módulo presença online foi dividido em 3 partes,
                  marketplaces, redes sociais, e loja virtual, e em cada uma eu
                  vou explorar tudo o que você precisa saber desde como preparar
                  as fotos do seu produto, cadastrar o produto, receber
                  pagamentos, configurar domínio, definir plataformas,
                  integrações, meios de pagamento, vantagens e desvantagens de
                  vender em cada lugar, além de dicas preciosas sobre o que eu
                  já fiz de errado para que você não cometa os mesmos erros.
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                iconStyle={iconStyle}
                icon={<BatteryChargingFullIcon />}
              >
                <h4 className="vertical-timeline-element-title">
                  Gerenciando seu negócio
                </h4>
                <p>
                  Vamos utilizar ferramentas que ajudarão a você a gerenciar as
                  suas vendas, estoque, produção, definir metas e métricas, como
                  coletar e quais dados coletar, de forma que suas decisões
                  sejam assertivas e mantenham sempre o seu negócio no rumo
                  certo. 
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
