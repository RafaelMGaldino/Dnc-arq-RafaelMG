import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

import Logo from '../../assets/dnc-logo.svg';
import FacebookLogo from '../../assets/faceIcon.svg';
import TwitLogo from '../../assets/twitIcon.svg';
import LinkdLogo from '../../assets/LinkdIcon.svg';
import InstaLogo from '../../assets/instaIcon.svg';
import Brazilicon from '../../assets/brazilicon.svg';
import Useicon from '../../assets/useicon.svg';

/*Contaxts*/
import { AppContext } from '../../contexts/AppContext.jsx';


function Footer() {
  const appContext = useContext(AppContext);
  const  changeLanguage = (country) => {
    appContext.setLanguage(country);
  }


  return (
    <footer>
      <div className="container">
        <div className="footer-content d-flex jc-between mobile-fd-column ">


          <div className="footer-col">
            <img src={Logo} alt="Logo" />
            <p className="grey-1-color">
             {appContext.languages[appContext.language].general.footerLogoText}
            </p>
            <div className="d-flex social-links">
              <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={FacebookLogo} alt="Facebook" />
              </a>
              <a href="http://x.com" target="_blank" rel="noopener noreferrer">
                <img src={TwitLogo} alt="Twitter" />
              </a>
              <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src={LinkdLogo} alt="LinkedIn" />
              </a>
              <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={InstaLogo} alt="Instagram" />
              </a>
            </div>
          </div>

          {/* Coluna 2 */}
          <div className="footer-col mobile-fd-column ">
            <h3>{appContext.languages[appContext.language].general.pages}</h3>
            <ul className="nonelist">
              <li><Link to="/">{appContext.languages[appContext.language].menu.home}</Link></li>
              <li><Link to="/about">{appContext.languages[appContext.language].menu.about}</Link></li>
              <li><Link to="/projects">{appContext.languages[appContext.language].menu.projects}</Link></li>
              <li><Link to="/contact">{appContext.languages[appContext.language].menu.contact}</Link></li>
            </ul>
          </div>

          {/* Coluna 3 */}
          <div className="footer-col">
            <h3>{appContext.languages[appContext.language].general.contact}</h3>
            <p className="grey-1-color">
              R. Justino Cobra, 61 – Vila Ema <br />
              São José dos Campos – SP <br />
              CEP 12243-030
            </p>
            <p className="grey-1-color">suporte@escoladnc.com.br</p>
            <p className="grey-1-color">(19) 99187-4342</p>
          </div>
        </div>

        {/* Área inferior */}
        <div className="footer-copy d-flex jc-between">
          <p className="grey-1-color">Copyright © DNC - 2024</p>
          <div className="langs-area d-flex">
            <img src={Brazilicon} alt="Português" height="29px" onClick={() => changeLanguage('br')} />
            <img src={Useicon} alt="Inglês" height="29px" onClick={() => changeLanguage('en')}  />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 