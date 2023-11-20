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
                        <a href="#about">Sobre mi</a>
                    </li>
                    <li>
                        <a href="#skills">Habilidades</a>
                    </li>
                    <li>
                        <a href="#works">Trabajos</a>
                    </li>
                    <li>
                        <a href="#contact">Contacto</a>
                    </li>
                </ul>
            </div>
            <div className="buttom-container">
                <button>Descargar CV</button>
            </div>
        </header>
    );
}