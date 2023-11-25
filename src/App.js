import './App.css';
import {Landing} from './components/Landing';
import {Skills} from './components/Skills';
import {Works} from './components/Works';
import {Footer, Header} from './components/Header-Footer';
import { ContactForm } from './components/Form-Contact';
function App() {
  return (
    <div className="App">
      <Header 
        image="logo"
      />
        <Landing
          title="Desarrollador Full-Stack"
          text="Gabriel Giorgis "
          image={"portofolio"}
        />
      <Skills />
      <Works />
      <ContactForm />
      <Footer/>
    </div>
    
  );
}

export default App;
