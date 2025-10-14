import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Credentials from './components/Credentials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Credentials />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
