import Project from "../components/Project/Project";
import { projectsList } from "../components/Helpers/Project.list";

const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {projectsList.map((e, id) => {
            return (
              <Project
                key={e.key}
                title={e.title}
                img={e.img}
                id={id}
              />
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default Projects;