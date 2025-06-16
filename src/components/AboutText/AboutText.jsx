import './AboutText.css'; 


import {useContext} from 'react';
import { AppContext } from '../../contexts/AppContext';


function AboutText () {

  const appContext = useContext(AppContext);

  return (

    <div className="container">
        <div className="text-sectio d-flex text-d">
            <div className="text-section-text">
                <h2>{appContext.languages[appContext.language].about.title}</h2>
            </div>

            <div className="text-section-text">
              <p className="primary-color">{appContext.languages[appContext.language].hero.title}</p>
              <p >{appContext.languages[appContext.language].about.p2}</p>
              <p >{appContext.languages[appContext.language].about.p3}</p>
           </div>
        </div>
   </div>
    
   
  );
}

export default AboutText;
