import React from "react";
import { MetaTags } from "react-meta-tags";
import CursoProEspera from "./curso/CursoProEspera";
import CursoProIncomodacao from "./curso/CursoProIncomodacao";

class CursoPro extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  render() {
    let page;
    if (new Date() < new Date("2020-06-05 08:00:00")) {
      page = <CursoProEspera />;
    } else {
      page = <CursoProIncomodacao />;
    }

    return (
      <div ref="main">
        <MetaTags>
          <title>
            Crie seu negócio online de impressão 3D - Alexandre Betioli
          </title>
          <meta
            name="description"
            content="Treinamento para quem não tem tempo a perder e quer começar a lucrar com impressão 3D."
          />
        </MetaTags>
        {page}
      </div>
    );
  }
}

export default CursoPro;
