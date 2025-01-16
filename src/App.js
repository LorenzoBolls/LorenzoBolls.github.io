import logo from './logo.svg';
import './App.css';
import Hero from './pages/Hero';
import About from './pages/About'
import Experiences from './pages/Experiences'
import Navbar from './components/Navbar'
import FoldMap from './components/FoldMap'
import Projects from './pages/Projects'
import Contact from './pages/Contact'


const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <FoldMap />
        <Projects />
        <Contact />
      </main>
    </>
  );
};

export default App;
