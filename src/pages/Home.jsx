import Header from '../components/header/Header';
import Footer from '../components/footer/footer';
import Hero from '../components/hero/hero';


function Home() {
  return (
    <>
      <Header/>
      <div className='container' > 
        <Hero/>
      </div>
      <Footer/>
    </>
  );
}

export default Home;


