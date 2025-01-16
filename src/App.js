import logo from './logo.svg';
import './App.css';
import Hero from './pages/Hero';
import About from './pages/About'
import Experiences from './pages/Experiences'
import Navbar from './components/Navbar'
import Projects from './pages/Projects'
import Contact from './pages/Contact'


const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experiences />
        <Projects />
        <Contact />
      </main>
    </>
  );
};

export default App;
