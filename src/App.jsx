import { useState } from "react";
import "./App.css"

import Cabecalho from "./componentes/Cabecalho";
import ProjetoCard from "./componentes/ProjetoCard";
import Resumo from "./componentes/Resumo";
import Rodape from "./componentes/Rodape";
import Secao from "./componentes/Secao";
import StatusBadge from "./componentes/StatusBadge";
import TecnologiaTag from "./componentes/TecnologiaTag";

function App() {
  const [projetos] = useState([
    {
      id: 1,
      nome: "Desenvolvimento Web",
      descricao: "Aprenda a criar sites e aplicações web.",
      status: "Concluído",
      tecnologias: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 2,
      nome: "Desenvolvimento de Sistemas",
      descricao: "Aprenda lógica de programação e desenvolvimento de sistemas.",
      status: "Em desenvolvimento",
      tecnologias: ["Java", "SQL", "React"],
    },
    {
      id: 3,
      nome: "Banco de Dados",
      descricao: "Aprenda a organizar e gerenciar bancos de dados.",
      status: "Planejamento",
      tecnologias: ["SQL", "MySQL"],
    },
  ]);

  const total = projetos.length;

  const concluidos = projetos.filter(
    (projeto) => projeto.status === "Concluído"
  ).length;

  const desenvolvimento = projetos.filter(
    (projeto) => projeto.status === "Em desenvolvimento"
  ).length;

  return (
    <div className="app">
      <Cabecalho />

      <main className="conteudo">
        <Resumo
          total={total}
          concluidos={concluidos}
          desenvolvimento={desenvolvimento}
        />

        <Secao titulo="Projetos disponíveis">
          <div className="lista-projetos">
            {projetos.map((projeto) => (
              <article className="projeto-card" key={projeto.id}>
                <h3>{projeto.nome}</h3>

                <p>{projeto.descricao}</p>

                <StatusBadge status={projeto.status} />

                <div className="tecnologias">
                  {projeto.tecnologias.map((tecnologia) => (
                    <TecnologiaTag
                      key={tecnologia}
                      nome={tecnologia}
                    />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Secao>
      </main>

      <Rodape />
    </div>
  );
}

export default App;