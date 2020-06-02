import React from "react";
import { MetaTags } from "react-meta-tags";
import CursoProEspera from "./curso/CursoProEspera";
import CursoProIncomodacao from "./curso/CursoProIncomodacao";
import Lancamento from "./lancamento/Lancamento";

class CursoPro extends React.Component {
  render() {
    let today = new Date();

    let page = <CursoProEspera />;

    if (
      today >= new Date("2020-06-05 08:00:00") &&
      today < new Date("2020-06-08 08:00:00")
    ) {
      page = <CursoProIncomodacao />;
    }

    if (
      today >= new Date("2020-06-08 08:00:00") &&
      today < new Date("2020-06-15 00:00:00")
    ) {
      page = <Lancamento />;
    }

    return (
      <div>
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
