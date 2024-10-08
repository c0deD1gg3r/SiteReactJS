import { NavLink } from 'react-router-dom';
import './Project.css';


const Project = ({ title, img, id }) => {
  return (
    <li className="project">
      <NavLink to={`/project/${id}`}>
        <img src={img} alt={title} className="project__img" />
        <h3 className="project__title">{title}</h3>
      </NavLink>
    </li>
  );
};

export default Project;