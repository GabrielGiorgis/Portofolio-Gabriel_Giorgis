import './App.css';
import {Landing} from './components/Landing';
import {Skills} from './components/Skills';
import Resume from './components/Resume';
function App() {
  return (
    <div className="App">
      <section className="landing">
        <Landing
          title="Desarrollador Full-Stack"
          text="Gabriel Giorgis"
          image={"portofolio"}
        />
      </section>
      <Skills />
      <section className="resume">
        <Resume />
      </section>
    </div>
  );
}

export default App;
