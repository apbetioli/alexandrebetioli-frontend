import React from "react";
import { ReactTitle } from "react-meta-tags";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import QuizChart from "./QuizChart";

const perguntas = [
  "1. Esforço-me para realizar as coisas que devem ser feitas",
  "2. Quando me deparo com um problema difícil, levo muito tempo para encontrar a solução",
  "3. Termino meu trabalho a tempo",
  "4. Aborreço-me quando as coisas não são feitas devidamente",
  "5. Prefiro situações em que posso controlar ao máximo o resultado final",
  "6. Gosto de pensar no futuro",
  "7. Quando começo uma tarefa ou projeto novo, coleto todas as informações possíveis antes de dar prosseguimento",
  "8. Planejo um projeto grande dividindo-o em tarefas mais simples",
  "9. Consigo que os outros apoiem minhas recomendações",
  "10. Tenho confiança de que posso ser bem-sucedido em qualquer atividade que me proponha a executar",
  "11. Não importa com quem fale, sempre escuto atentamente",
  "12. Faço as coisas que devem ser feitas sem que os outros tenham de me pedir",
  "13. Insisto várias vezes para conseguir que as outras pessoas façam o que desejo",
  "14. Sou fiel às promessas que faço",
  "15. Meu rendimento no trabalho é melhor do que o das outras pessoas com quem trabalho",
  "16. Envolvo-me com algo novo só depois de ter feito todo o possível para assegurar o seu êxito",
  "17. Acho uma perda de tempo me preocupar com o que farei da minha vida",
  "18. Procuro conselhos das pessoas que são especialistas no ramo em que estou atuando",
  "19. Considero cuidadosamente as vantagens e desvantagens de diferentes alternativas antes de realizar uma tarefa",
  "20. Não perco muito tempo pensando em como posso influenciar as outras pessoas",
  "21. Mudo a maneira de pensar se outros discordam energicamente dos meus pontos de vista",
  "22. Aborreço-me quando não consigo o que quero",
  "23. Gosto de desafios e novas oportunidades",
  "24. Quando algo se interpõe ao que estou tentando fazer, persisto em minha tarefa",
  "25. Se necessário, não me importo de fazer o trabalho dos outros para cumprir um prazo de entrega",
  "26. Aborreço-me quando perco tempo",
  "27. Considero minhas possibilidades de êxito ou fracasso antes de começar a atuar",
  "28. Quanto mais específicas forem minhas expectativas em relação ao que quero obter na vida, maiores são minhas possibilidades de êxito",
  "29. Tomo decisões sem perder tempo buscando informações",
  "30. Trato de levar em conta todos os problemas que podem se apresentar e antecipo o que faria caso sucedam",
  "31. Conto com pessoas influentes para alcançar minhas metas",
  "32. Quando estou executando algo difícil e desafiador, tenho confiança em meu sucesso",
  "33. Tive fracassos no passado",
  "34. Prefiro executar tarefas que domino perfeitamente e nas quais me sinto seguro",
  "35. Quando me deparo com sérias dificuldades rapidamente passo para outras atividades",
  "36. Quando estou fazendo um trabalho para outra pessoa, me esforço, de forma especial, para que fique satisfeita com o trabalho",
  "37. Nunca fico totalmente satisfeito com a forma como são feitas as coisas; sempre considero que há uma maneira melhor de fazê-las",
  "38. Executo tarefas arriscadas",
  "39. Conto com um plano claro de vida",
  "40. Quando executo um projeto para alguém, faço muitas perguntas para assegurar-me de que entendi o que quer",
  "41. Enfrento os problemas na medida em que surgem, em vez de perder tempo antecipando-os",
  "42. Para alcançar minhas metas, procuro soluções que beneficiem todas as pessoas envolvidas em um problema",
  "43. O trabalho que realizo é excelente",
  "44. Em algumas ocasiões, obtive vantagens de outras pessoas",
  "45. Aventuro-me a fazer coisas novas e diferentes das que fiz no passado",
  "46. Tenho diferentes maneiras de superar obstáculos que se apresentam na obtenção de minhas metas",
  "47. Minha família e minha vida pessoal são mais importantes para mim do que as datas de entregas de trabalho determinadas por mim mesmo",
  "48. Encontro a maneira mais rápida de terminar os trabalhos, tanto em casa como no trabalho",
  "49. Faço coisas que as outras pessoas consideram arriscadas",
  "50. Preocupo-me tanto em alcançar minhas metas semanais como minhas metas anuais",
  "51. Conto com várias fontes de informação ao procurar ajuda para a execução de tarefas e projetos",
  "52. Se determinado método para enfrentar um problema não der certo recorro a outro",
  "53. Posso conseguir que pessoas com firmes convicções e opniões mudem seu modo de pensar",
  "54. Mantenho-me firme em minhas decisões, mesmo quando as outras pessoas se opões energicamente",
  "55. Quando desconheço algo, não hesito em admiti-lo",
];

const mv = (value, x1, y1, x2, y2) => (value - x1) * (y2 - x2) / (y1 - x1) + x2;

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = { values: {}, data: [] };
  }

  componentDidMount() {
    this.scrollTop();
  }

  scrollTop() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  calculate(v) {
    let oportunidades = v[1] + v[12] + v[23] - v[34] + v[45] + 6;
    let persistencia = v[2] + v[13] + v[24] - v[35] + v[46] + 6;
    let comprometimento = v[3] + v[14] + v[25] + v[36] - v[47] + 6;
    let qualidade = v[4] + v[15] + v[26] + v[37] + v[48] + 0;
    let riscos = v[5] + v[16] + v[27] - v[38] + v[49] + 6;
    let metas = v[6] - v[17] + v[28] + v[39] + v[50] + 6;
    let informacoes = v[7] + v[18] - v[29] + v[40] + v[51] + 6;
    let planejamento = v[8] + v[19] + v[30] - v[41] + v[52] + 6;
    let persuasao = v[9] - v[20] + v[31] + v[42] + v[53] + 6;
    let independencia = v[10] - v[21] + v[32] + v[43] + v[54] + 6;
    let correcao = v[11] - v[22] - v[33] - v[44] + v[55] + 18;
    let fator = 0;

    if (correcao === 20 || correcao === 21) {
      fator = 3;
    } else if (correcao === 22 || correcao === 23) {
      fator = 5;
    } else if (correcao === 22 || correcao === 23) {
      fator = 7;
    }

    oportunidades -= fator;
    persistencia -= fator;
    comprometimento -= fator;
    qualidade -= fator;
    riscos -= fator;
    metas -= fator;
    informacoes -= fator;
    planejamento -= fator;
    persuasao -= fator;
    independencia -= fator;

    oportunidades = mv(oportunidades, 0, 25, 0, 10);
    persistencia = mv(persistencia, 0, 25, 0, 10);
    comprometimento = mv(comprometimento, 0, 25, 0, 10);
    qualidade = mv(qualidade, 0, 25, 0, 10);
    riscos = mv(riscos, 0, 25, 0, 10);
    metas = mv(metas, 0, 25, 0, 10);
    informacoes = mv(informacoes, 0, 25, 0, 10);
    planejamento = mv(planejamento, 0, 25, 0, 10);
    persuasao = mv(persuasao, 0, 25, 0, 10);
    independencia = mv(independencia, 0, 25, 0, 10);

    let data = [
      {
        caracteristica: "Busca de oportunidades e iniciativa",
        value: oportunidades,
      },
      {
        caracteristica: "Correr riscos calculados",
        value: riscos,
      },
      {
        caracteristica: "Exigência de qualidade e eficiência",
        value: qualidade,
      },
      {
        caracteristica: "Persistência",
        value: persistencia,
      },
      {
        caracteristica: "Comprometimento",
        value: comprometimento,
      },
      {
        caracteristica: "Busca de informações",
        value: informacoes,
      },
      {
        caracteristica: "Estabelecimento de metas",
        value: metas,
      },
      {
        caracteristica: "Planejamento e monitoramento sistemático",
        value: planejamento,
      },
      {
        caracteristica: "Persuasão e rede de contatos",
        value: persuasao,
      },
      {
        caracteristica: "Independência e autoconfiança",
        value: independencia,
      },
    ];

    this.setState({ data: data });

    this.scrollTop();
  }

  onSubmit(event) {
    event.preventDefault();
    this.calculate(this.state.values);
  }

  handleChange(event) {
    let values = this.state.values;
    values[event.target.name] = parseInt(event.target.value);
    this.setState({ values: values });
  }

  renderChart() {
    let chart = "";
    if (this.state.data.length > 0) {
      chart = (
        <div className="quiz-chart">
          <QuizChart data={this.state.data} />
        </div>
      );
    }
    return chart;
  }

  renderForm() {
    if (this.state.data.length > 0) return "";
    return (
      <Form onSubmit={this.onSubmit.bind(this)}>
        <Container>
          <Row className="checkout bold">
            <Col lg="7" xs="12">
              Selecione o número que melhor descreve você em cada situação:
            </Col>
            <Col lg="1" xs="2">
              1. Nunca
            </Col>
            <Col lg="1" xs="2">
              2. Raras vezes
            </Col>
            <Col lg="1" xs="3">
              3. Algumas vezes
            </Col>
            <Col lg="1" xs="2">
              4. Muitas vezes
            </Col>
            <Col lg="1" xs="2">
              5. Sempre
            </Col>
          </Row>

          {perguntas.map((pergunta, key) => {
            let name = "" + (key + 1);
            return (
              <Row key={key}>
                <Col lg="7" xs="12">
                  <p>{pergunta}</p>
                </Col>
                <Col lg="1" xs="2">
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="radio"
                        name={name}
                        value={1}
                        onChange={this.handleChange.bind(this)}
                        required
                      />
                      1
                    </Label>
                  </FormGroup>
                </Col>
                <Col lg="1" xs="2">
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="radio"
                        name={name}
                        value={2}
                        onChange={this.handleChange.bind(this)}
                      />
                      2
                    </Label>
                  </FormGroup>
                </Col>
                <Col lg="1" xs="2">
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="radio"
                        name={name}
                        value={3}
                        onChange={this.handleChange.bind(this)}
                      />
                      3
                    </Label>
                  </FormGroup>
                </Col>
                <Col lg="1" xs="2">
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="radio"
                        name={name}
                        value={4}
                        onChange={this.handleChange.bind(this)}
                      />
                      4
                    </Label>
                  </FormGroup>
                </Col>
                <Col lg="1" xs="2">
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="radio"
                        name={name}
                        value={5}
                        onChange={this.handleChange.bind(this)}
                      />
                      5
                    </Label>
                  </FormGroup>
                </Col>
              </Row>
            );
          })}
          <Row>
            <Col lg="12">
              <br />
              <Button type="submit" color="checkout" block>
                Enviar
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    );
  }

  render() {
    return (
      <div ref="main">
        <ReactTitle title="Qual é seu perfil empreendedor? - Alexandre Betioli" />

        <section className="section-sm">
          <Container>
            <Row className="checkout">
              <Col lg="12">
                <h2>Qual é o seu perfil empreendedor?</h2>
              </Col>
              <Col lg="12">{this.renderChart()}</Col>
            </Row>
          </Container>

          {this.renderForm()}
        </section>
      </div>
    );
  }
}

export default Quiz;
