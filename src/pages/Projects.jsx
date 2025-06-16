import Banner from '../components/banner/banner';
import Header from '../components/header/Header';
import Footer from '../components/footer/footer';
import ProjectsList from '../components/projectsList/projectsList';


import {useContext} from 'react';
import { AppContext } from '..//contexts/AppContext';

function Projects(){
  const appContext = useContext(AppContext);

 return (
    <>
      <Header/>
      <Banner title={appContext.languages[appContext.language].menu.projects}  image="project.jpg" />
      <div className="container" > 
         <ProjectsList />
      </div>
      <Footer/>
    </>
  );
}

export default Projects;