import {useContext, useState} from 'react';
import {Link} from 'react-router-dom'
import Button from '../button/button';


// ASSETs img

import './Header.css';
import Logo from '../../assets/dnc-logo.svg'

import { AppContext } from '../../contexts/AppContext'; // Importando o contexto


function Header () {
  const [isOpen, setIsOpen] = useState(false);

  const appContext = useContext(AppContext); // Usando o contexto

    return (

         <header>
          <div className="container">
            <div className="al-center d-flex jc-between">
                <Link to='/'> <img src={Logo}  alt="Logo" /></Link>

                 <div className='mobile-menu'>
                  <Button buttonStyle="secondary" onClick={() => setIsOpen(!isOpen)}>
                    Menu
                  </Button>
                 </div>

               <nav className={`nav ${isOpen ? 'open' : ''}`}>
                    {isOpen && (
                    <button className="close-btn" onClick={() => setIsOpen(false)}>
                      X
                    </button>
                    )}

                    <ul className='al-center d-flex jc-between gap nonelist colorlist'>
                         <li><Link to='/home'>{appContext.languages[appContext.language].menu.home}</Link></li>
                         <li><Link to='/about'>{appContext.languages[appContext.language].menu.about}</Link></li>
                         <li><Link to='/projects'>{appContext.languages[appContext.language].menu.projects}</Link></li>
                         <li><Link to='/contact'>{appContext.languages[appContext.language].menu.contact}</Link></li>
                     </ul>
                 </nav>
               </div>
            </div>
              
         </header>

    )
}
export default Header;