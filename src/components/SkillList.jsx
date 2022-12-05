import { skills } from "../utils/skillsData";
import Skill from "./Skill";
import Curve from "./Curve";
import { nanoid } from "nanoid";

const SkillsList = () => {
  return (
    <section className="section-skills" id="skills" aria-label="skills">
      <Curve color="#fff" design="curve" />
      <article className="skills-container">
        <h2>
          My <span>skills</span>
        </h2>
        <section className="list">
          {skills.map(skill => (
            <Skill {...skill} key={nanoid()} />
          ))}
        </section>
      </article>
    </section>
  );
};

export default SkillsList;
