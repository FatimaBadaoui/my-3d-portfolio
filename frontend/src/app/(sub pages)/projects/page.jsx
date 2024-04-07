import Image from "next/image";
import bg from "../../../../public/background/projects-bg.png";
import { projectsData } from "../../data.js";
import RenderModel from "../../components/RenderModel.jsx";
import Staff from "../../components/models/Staff.jsx";
import ProjectList from "../../components/projects/index.jsx";

export default function Projects() {
  return (
    <>
      <Image
        src={bg}
        alt="background-image"
        className="fixed top-0 left-0 w-full h-full object-cover object-center opacity-35 -z-10"
      />

      <ProjectList projects={projectsData} />

      <div className="flex items-end justify-center fixed top-16 lg:top-20 left-1/2 lg:left-16 -translate-x-1/2 lg:translate-x-0 h-screen -z-10">
        <RenderModel>
          <Staff />
        </RenderModel>
      </div>
    </>
  );
}
