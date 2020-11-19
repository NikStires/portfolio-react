//import components
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import ArtGallery from './components/ArtGallery';
import Socials from './components/Socials';
import Footer from './components/Footer';
//import styles
import './styles/app.scss';

function App() {
  return (
    <div className='App'>
      <Nav />
      <About />
      <Projects />
      <ArtGallery />
      <Socials />
      <Footer />
    </div>
  );
}

export default App;
