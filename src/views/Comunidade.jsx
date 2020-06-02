import Footer from "components/Footer";
import Header from "components/Header";
import React from "react";
import { MetaTags } from "react-meta-tags";
import { Button, Col, Container, Row } from "reactstrap";

class Comunidade extends React.Component {
  render() {
    return (
      <div>
        <MetaTags>
          <title>Comunidade AB3D - Alexandre Betioli</title>
          <meta
            name="description"
            content="Participe da comunidade e acelere seu aprendizado interajindo com outros profissionais do mercado de impressão 3D."
          />
        </MetaTags>

        <Header />
        <section className="section comunidade">
          <Container>
            <Row>
              <Col lg="6">
                <h1>Comunidade AB3D</h1>

                <p className="lead">
                  Acelere o seu aprendizado. Tire suas dúvidas e interaja com
                  outros profissionais do mercado de impressão 3D.
                </p>

                <Button
                  color="primary"
                  href="https://discord.gg/sVXPeBn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Acessar comunidade
                </Button>
              </Col>
              <Col lg="6" className="centered discord">
                <img alt="..." src={require("assets/img/discord.png")} />
              </Col>
              <Col lg="12">
                <h2>Sobre a comunidade</h2>

                <p>
                  A comunidade AB3D foi criada com o objetivo principal de
                  reunir pessoas com um mesmo interesse: <br />
                  <strong> Impressão 3D</strong>.
                </p>
                <p>
                  Ela oferece uma forma organizada de conectar as pessoas para
                  que possam trocar experiências e evoluir no aprendizado da
                  impressão 3D e tecnologias afins.
                </p>
                <p>
                  Qualquer um pode participar, desde que respeite as regras da
                  comunidade. Para participar basta{" "}
                  <a
                    href="https://discord.gg/sVXPeBn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    acessar clicando aqui
                  </a>
                  . Você só precisará criar uma conta no Discord.
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
                    <strong>#modelagem</strong> - Canal para falar
                    exclusivamente sobre modelagem 3D.
                  </li>
                  <li>
                    <strong>#impressoras</strong> - Canal para falar
                    exclusivamente sobre impressoras 3D.
                  </li>
                  <li>
                    <strong>#oportunidades</strong> - Você está buscando ou quer
                    divulgar uma oportunidade este é o canal para isso. Seja um
                    serviço de impressão, consultoria, suporte dedicado,
                    modelagem sob encomenda entre outros.
                  </li>
                  <li>
                    <strong>#avisos</strong> - Canal somente leitura quer será
                    utilizado pela nossa equipe para postar avisos e anúncios.
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
