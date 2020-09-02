import ActionButton from "components/ActionButton";
import Footer from "components/Footer";
import Header from "components/Header";
import React from "react";
import { MetaTags } from "react-meta-tags";
import { Col, Container, Row } from "reactstrap";
import View from "./View";

class Comunidade extends View {
  render() {
    const convite = "https://discord.gg/sVXPeBn";

    return (
      <div ref="main">
        <MetaTags>
          <title>Comunidade AB3D - Alexandre Betioli</title>
          <meta
            name="description"
            content="Participe da comunidade e acelere seu aprendizado interagindo com outros profissionais do mercado de impressão 3D."
          />
          <meta
            name="keywords"
            content="impressão 3d,comunidade,3d printing,impressora 3d,fdm,sla,empreendedorismo,planilha,curso,aula,grátis"
          />
          <meta name="robots" content="index,follow"></meta>
        </MetaTags>

        <Header />
        <section className="section comunidade black">
          <Container>
            <Row>
              <Col lg="8">
                <h1>
                  <i className="fa fa-users" />
                  <span> Comunidade AB3D</span>
                </h1>

                <p className="lead">
                  Potencialize seu aprendizado participando da comunidade, tire
                  suas dúvidas e interaja com outros profissionais do mercado de
                  impressão 3D.
                </p>

                <p>
                  <ActionButton text="Quero meu convite" href={convite} />
                </p>
              </Col>
              <Col lg="4" className="centered discord">
                <a href={convite} target="_blank" rel="noopener noreferrer">
                  <img alt="..." src={require("assets/img/discord.png")} />
                </a>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section comunidade">
          <Container>
            <Row>
              <Col lg="12">
                <h2>Sobre a comunidade</h2>

                <p>
                  A comunidade AB3D oferece uma forma organizada de para tirar
                  dúvidas e conectar as pessoas para que possam trocar
                  experiências e evoluir no aprendizado do uso da impressão 3D
                  nos negócios.
                </p>

                <h2>Organização</h2>

                <p>
                  A comunidade é organizada em canais de discussão organizados
                  da seguinte forma:
                </p>
                <ul>
                  <li>
                    <strong>#boas-vindas</strong> - Canal somente leitura com
                    informações importantes para quem acaba de entrar na
                    comunidade.
                  </li>
                  <li>
                    <strong>#avisos</strong> - Canal somente leitura quer será
                    utilizado pela nossa equipe para postar avisos e anúncios.
                  </li>
                  <li>
                    <strong>#apresentações</strong> - Se apresente para a
                    comunidade e dê as boas vindas calorosas às apresentações
                    através de reactions.
                  </li>
                  <li>
                    <strong>#geral</strong> - Canal aberto para tratar de
                    quaiquer outros assuntos que não se encaixem nos demais
                    canais.
                  </li>
                  <li>
                    <strong>#ajuda</strong> - Canal para tirar dúvidas e pedir
                    ajuda sobre qualquer coisa relacionada a impressão 3D.
                  </li>
                  <li>
                    <strong>#oportunidades</strong> - Você está buscando ou quer
                    divulgar uma oportunidade este é o canal para isso. Seja um
                    serviço de impressão, consultoria, suporte dedicado,
                    modelagem sob encomenda entre outros.
                  </li>
                  <li>
                    <strong>#comunidade</strong> - Este canal é para sugestões e
                    feedback sobre a comunidade.
                  </li>
                </ul>
                <p>
                  Você pode silenciar as notificações de canais que você não tem
                  interesse clicando com o botão direito nele e depois em
                  Silenciar.
                </p>

                <h2>Regras da comunidade</h2>

                <ul>
                  <li>Respeito acima de tudo.</li>
                  <li>
                    Seja direto nas mensagens e também nas respostas. Evite
                    mensagens desnecessárias.
                  </li>
                  <li>
                    Tente mandar tudo em uma mensagem só. Assim são menos
                    notificações enviadas aos outros membros.
                  </li>
                  <li>Não envie spam.</li>
                  <li>
                    Todos os dias terão novas pessoas entrando na comunidade,
                    então surgirão perguntas repetidas e isso é totalmente
                    normal. Talvez algo que você não sabia antes e sabe agora
                    você pode ensinar também.
                  </li>
                  <li>
                    Não são permitidos convites para outras comunidades ou
                    postagem de links de afiliados.
                  </li>
                </ul>

                <h2>Moderação</h2>

                <p>
                  Caso seja postado algum conteúdo que infrinja as regras da
                  comunidade, os moderadores poderão remover o conteúdo.
                </p>

                <h2>Sugestões e denúncias</h2>

                <p>
                  Caso você queira fazer sugestões para melhoria da comunidade,
                  ou queria denunciar um comportamento incorreto de outro
                  participante da comunidade, ou que esteja infringindo as
                  regras da comunidade, você poderá entrar em contato pelo email{" "}
                  <a href="mailto:contato@alexandrebetioli.com.br">
                    contato@alexandrebetioli.com.br
                  </a>{" "}
                  que nossa equipe irá analisar a sua sugestão/denúncia.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Comunidade;
