"use client";
import Error from "@/app/error";
import ProjectDetailTemplate from "@/components/ProjectDetailTemplate/ProjectDetailTemplate";
import projectsData from "@/components/Projects/ProjectData";
import { useParams } from "next/navigation";

const ProjectPage = () => {
  const { url } = useParams();
  const selectedProject = projectsData.find((p) => p.url === url);

  return (
    <div>
      {selectedProject ? (
        <ProjectDetailTemplate project={selectedProject} />
      ) : (
        <>
        <Error statusCode={404} />
        </>
      )}
    </div>
  );
};

export default ProjectPage;
