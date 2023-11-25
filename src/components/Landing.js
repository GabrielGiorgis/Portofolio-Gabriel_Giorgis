import React from 'react';
import '../style-sheets/style-landing.css';

export function Landing(props){
    const [titlePart1, titlePart2] = props.title.split(" ");
    return(
      <section className="visible" id="about">
        <div className='presentation'>
          <div className='text'>
            <h1>{titlePart1} <span className='color'>{titlePart2}</span></h1>
            <p>{props.text}</p>
          </div>
          <div className='image'>
            <img className='image-landing' src={require(`../assets/img/${props.image}.png`)} alt={props.title} />
          </div>
        </div> 
      </section>
    );
}
