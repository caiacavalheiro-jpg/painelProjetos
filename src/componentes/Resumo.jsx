function Resumo({ total, concluidos, desenvolvimento }) {
  return (
    <section className="resumo">
      <h2>Resumo do painel</h2>

      <div>
        <h3>Total de projetos</h3>
        <p>{total}</p>
      </div>

      <div>
        <h3>Projetos concluídos</h3>
        <p>{concluidos}</p>
      </div>

      <div>
        <h3>Em desenvolvimento</h3>
        <p>{desenvolvimento}</p>
      </div>
    </section>
  );
}

export default Resumo;