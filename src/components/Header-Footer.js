import React from "react";
import '../style-sheets/style-header-footer.css';
export function Header(props){
    return(
        <header>
            <div className="logo-container">
                <img className="logo" src={require(`../assets/img/icons/logo-gabriel.png`)} alt={props.image} />
            </div>
            <div className="nav-container">
                <ul className="nav">
                    <li>
                        <a href="#" onClick={() => mostrarSeccion('about')}>Sobre mi</a>
                    </li>
                    <li>
                        <a href="#" onClick={() => mostrarSeccion('skills')}>Habilidades</a>
                    </li>
                    <li>
                        <a href="#" onClick={() => mostrarSeccion('works')}>Trabajos</a>
                    </li>
                    <li>
                        <a href="#" onClick={() => mostrarSeccion('contact')}>Contacto</a>
                    </li>
                </ul>
            </div>
            <div className="buttom-container">
                <button>Descargar CV</button>
            </div>
        </header>
    );
}

function mostrarSeccion(idSeccion) {
  var seccionActual = document.getElementById(idSeccion);

      if (idSeccion === 'landing') {
        // Si es el landing, solo mostrarlo y ocultar las otras
        var secciones = document.querySelectorAll('section');
        secciones.forEach(function(seccion) {
          seccion.classList.remove('visible');
          seccion.classList.add('hidden');
        });
        seccionActual.classList.remove('hidden');
        seccionActual.classList.add('visible');
      } else {
        // Ocultar todas las secciones y mostrar la deseada
        var secciones = document.querySelectorAll('section');
        secciones.forEach(function(seccion) {
          seccion.classList.remove('visible');
          seccion.classList.add('hidden');
        });
        seccionActual.classList.remove('hidden');
        seccionActual.classList.add('visible');
  }
}

export function Footer() {
    return (
      <footer className="footer-container">
        <div className="social-icons">
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <img src={require('../assets/img/icons/linkedin.png')} alt="LinkedIn" className="icon" />
          </a>
          <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer">
            <img src={require('../assets/img/icons/whatsapp.png')} alt="WhatsApp" className="icon" />
          </a>
          <a href="mailto:tuCorreo@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={require('../assets/img/icons/gmail.png')} alt="Gmail" className="icon" />
          </a>
        </div>
        <p className="copyright">&copy; 2023 Gabriel Giorgis. Todos los derechos reservados.</p>
      </footer>
    );
}

