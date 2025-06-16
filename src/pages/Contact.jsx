import Banner from '../components/banner/banner';
import Header from '../components/header/Header';
import Footer from '../components/footer/footer';
import ContactForm from '../components/contactForm/contactForm';


import {useContext} from 'react';
import {AppContext} from '..//contexts/AppContext';

function Contact(){

   const appContext = useContext(AppContext);
    return(
     <>
      <Header/>
      <Banner title={appContext.languages[appContext.language].menu.contact} image="contact.jpg" />
      <div className="container" > 
         <ContactForm />
      </div>
      <Footer/>
    </>
    )
}
export default Contact;