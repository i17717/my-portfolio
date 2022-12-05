const Skill = ({ img, name, progress, color }) => {
  return (
    <article className="skill-item">
      <svg className="circular-progress" width={160} height={160}>
        <circle cx={80} cy={80} r={70} stroke="#f1f1f1" strokeWidth={7} />
        <circle
          cx={80}
          cy={80}
          r={70}
          stroke={color}
          strokeWidth={8}
          strokeDasharray={100}
          strokeDashoffset={100 - progress}
          pathLength={100}
        />
        <circle cx={80} cy={80} r={70} strokeWidth={8} className="striped" />
      </svg>

      <figure className="skill-info">
        <img className="skill-img" src={img} alt={name} />
        <figcaption className="skill-name">{name}</figcaption>
      </figure>
    </article>
  );
};

export default Skill;
