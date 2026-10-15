function StatusBadge({ status }) {
  const classe =
    status == "Concluído"? "concluido": status == "Em desenvolvimento"? "desenvolvimento": status == "Planejamento"? "planejamento": "outro";

  return (
    <span className={`status-badge ${classe}`}>
      {status}
    </span>
  );
}

export default StatusBadge;
