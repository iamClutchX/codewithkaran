import SectionTitle from "../Common/SectionTitle";
import SingleProject from "./SingleProject";
import projects from "./ProjectData";

const Projects = () => {
  return (
    <section id="projects" className="bg-primary/[.03] py-16 md:py-20 lg:py-28">
        
      <div className="container">
        <SectionTitle
          title="My Projects"
          paragraph="Below are some of the projects I have worked on."
          center
        />

        <div >
          {projects.map((project) => (
            <SingleProject key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
