import AboutText from '../components/AboutText/AboutText';
import Banner from '../components/banner/banner';
import Header from '../components/header/Header';
import Footer from '../components/footer/footer';


import {useContext} from 'react';
import { AppContext } from '..//contexts/AppContext';

function About(){
  const appContext = useContext(AppContext);

  return (
    <>
      <Header/>
      <Banner title={appContext.languages[appContext.language].menu.about} image="about.jpg"/>
      <div className='container' > 
        <AboutText/>
      </div>
      <Footer/>
    </>
  );
}
export default About;