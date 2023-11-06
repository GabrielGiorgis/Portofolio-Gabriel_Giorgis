import React from "react";
import ProgressBar from "./Progres-Bar";
import '../style-sheets/style-skills.css';
export function Skill(props) {
    return (
        <div className="skill">
            <img src={require(`../../public/img/icons/${props.image}.png`)} alt={props.title} />
                <div className="skill-text">    
                    <h3>{props.title}</h3>
                    <ProgressBar percent={props.percent} /> {/* Agrega la barra de progreso */}
                </div>
        </div>
    );
}

export function Skills() {
  return(
    <section className="skills">
          <h3 className="title">Habilidades</h3>
          <div className="skills-container">
            <div className="skills-lvl">
              <div className='skills-title'>
                <h2 className="">Back-End</h2>
                <button onClick={() => toggleClass("skills-content-pro", "skills-content-view")} className="buttom-more">Ver más</button>
              </div>
              <div id="skills-content-pro" className='skills-content'>
                <Skill
                  title="Java"
                  image="java"
                  percent={90}
                />
                <Skill
                  title="Spring"
                  image="spring"
                  percent={85}
                />
                <Skill
                  title="Python"
                  image="python"
                  percent={70}
                />
                <Skill
                  title="MySQL"
                  image="mysql"
                  percent={75}
                />
                <Skill
                  title="C#"
                  image="c-sharp"
                  percent={75}
                />
                <Skill
                  title="Node JS"
                  image="node"
                  percent={60}
                />
              </div>
            </div>
            <div className="skills-lvl">
              <div className='skills-title'>
                <h2>Front-End</h2>
                <button onClick={() => toggleClass("skills-content-mid", "skills-content-view")} className="buttom-more">Ver más</button>
              </div>
              <div id ="skills-content-mid" className='skills-content' >
              <Skill
                  title="React JS"
                  image="react"
                  percent={65}
                />
              </div>
            </div>
          </div>
        </section>
  );
}

function toggleClass(id, newClass){
  var element = document.getElementById(id);
  console.log("Entre a la funcion")
  if(element.className == "skills-content"){
    element.className = newClass;
    console.log("Entre al if")
  }else{
    element.className = "skills-content";
    console.log("Entre al else")
  }
  
}

/*export function showSkills(id) {
    const skills = document.getElementById(id);
  
    // Obtén la altura actual del elemento
    const computedStyle = window.getComputedStyle(skills);
    const height = parseFloat(computedStyle.height);
  
    if (height === 0) {

        // Espera un momento antes de cambiar la altura para que la transición funcione
      setTimeout(() => {
        skills.style.height = `${skills.scrollHeight}px`;
      }, 0);

      // Establece una altura para mostrar el contenido
      skills.style.height = 'auto';
  
      
    } else {
      // Establece la altura en 0 para ocultar el contenido
      skills.style.height = '0';
    }
}*/


