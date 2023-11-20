import React from "react";
import '../style-sheets/style-works.css';
export function Work(props){
  return(
        <div className="work">
          <img className="work-image" src={require(`../assets/img/works/${props.image}.jpg`)} alt={props.title} />
          <div className="work-text">    
            <h3>{props.title}</h3>
            <img className="work-icon" src={require(`../assets/img/icons/${props.languaje}.png`)} alt="lenguaje"/>
            <p>{props.text}</p>

          </div>
        </div>
    );
}

export function Works() {
  return(
    <section className="works" id="works">
      <h3 className="title">Trabajos</h3>
      <div className="works-container">
        <Work
          title="Programacion por voz"
          text="Speech Recognition, Tkinter"
          image="work"
          languaje="python"
        />
        <Work
          title="Calculadora"
          text="Windows Forms"
          image="work"
          languaje="c-sharp"
        />
        <Work
          title="Biblioteca online"
          text="SPRING, MySQL"
          image="work"
          languaje="java"
        />
      </div>
    </section>
  );
}