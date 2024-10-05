import { useParams } from 'react-router-dom';
import BtnGitHub from '../components/btnGitHub/BtnGutHub';
import { projectsList } from '../components/Helpers/Project.list';

const Project = () => {
  const { id } = useParams();
  let project = projectsList[id];

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">

          <h1 className="title-1">{project.title}</h1>

          <img src={project.img} alt={project.title} className="project-details__cover" />

          <div className="project-details__desc" >
            <p>Skills: {project.skills}</p>
          </div>

          {project.gitHubLink && (
            <BtnGitHub link="https://github.com/c0deD1gg3r" />
          )}


        </div>
      </div>
    </main >
  );
};

export default Project;