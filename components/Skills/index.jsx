import SectionTitle from "../Common/SectionTitle";
import SingleSkill from "./SingleSkill";
import skillsData from "./skillsData";

const Skills = () => {
  return (
    <>
      <section id="skills" className="bg-primary/[.03] py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="My Skills"
            paragraph="Here are some of the skills I have developed over my career."
            center
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 px-6 ">
            {skillsData.map((skill) => (
              <SingleSkill key={skill.id} skill={skill} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
