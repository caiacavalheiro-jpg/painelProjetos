import StatusBadge from "./StatusBadge";
import TecnologiaTag from "./TecnologiaTag";

function ProjetoCard({
  titulo,
  descricao,
  responsavel,
  status,
  tecnologias,
  destaque
}) {
  return (
    <article className="projeto-card">
      <h3>{titulo}</h3>

      <p>{descricao}</p>

      <p>Responsável: {responsavel}</p>

      <StatusBadge status={status} />

      <div className="tecnologias">
        {tecnologias.map((tecnologia) => (
          <TecnologiaTag
            key={tecnologia}
            nome={tecnologia}
          />
        ))}
      </div>

      {destaque && (
        <strong>Projeto em destaque</strong>
      )}
    </article>
  );
}

export default ProjetoCard;