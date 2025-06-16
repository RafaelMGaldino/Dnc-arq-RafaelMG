import { useContext, useState, useEffect } from 'react';
import './projectsList.css';

/* ASSETS */
import LikedFillde from '../../assets/like-fillder.svg';
import Liked from '../../assets/like.svg';
import Button from '../button/button';

import { AppContext } from '../../contexts/AppContext';

/* UTILITIES */
import { getApiData } from '../../services/apiServices';

function ProjectsList() {
  const [projects, setProjects] = useState([]); // inicializar como array vazio
  const [favProjects, setFavProjects] = useState([]); // inicializar como array vazio
  const appContext = useContext(AppContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectsResponse = await getApiData('projects');
        setProjects(projectsResponse);
      } catch {
        setProjects([]);
      }
    };
    fetchData();
  }, []);

  // A função fica fora do useEffect
  const handleSavedProjects = (id) => {
    setFavProjects((prevFavProjects) => {
      if (prevFavProjects.includes(id)) {
        const filterArray = prevFavProjects.filter((projectId) => projectId !== id);
        sessionStorage.setItem('favProjects', JSON.stringify(filterArray));
        return filterArray;
      } else {
        const updatedArray = [...prevFavProjects, id];
        sessionStorage.setItem('favProjects', JSON.stringify(updatedArray));
        return updatedArray;
      }
    });
  };


  useEffect(() => {
    const savedFavProjects = JSON.parse(sessionStorage.getItem('favProjects'));
    if (savedFavProjects) {
      setFavProjects(savedFavProjects);
    }


    
  }, [])

  return (
    <div className="projects-section">
      <div className="projects-hero">
        <h2>{appContext.languages[appContext.language].projects.title}</h2>
        <p>
          {appContext.languages[appContext.language].projects.subtitle}
        </p>
      </div>
      <div className="projects-grid">

        {projects.map((project) => (
          <div className="projects-card d-flex jc-center al-center fd-column" key={project.id}>
            <div
              className="thumb tertiary-background"
              style={{ backgroundImage: `url(${project.thumb})` }}
            ></div>
            <h3>{project.title}</h3>
            <p>{project.subtitle}</p>
            <Button  className='button-liked' onClick={() => handleSavedProjects(project.id)}>
              <img src={favProjects.includes(project.id) ? LikedFillde : Liked} height="20px" className="liked" alt="like icon" />
            </Button>
          </div>
        ))}

      </div>
    </div>
  );
}

export default ProjectsList;
