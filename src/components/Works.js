import React from "react";

export function Work(props){
  return(
    <div className="works">
      <div className="work">
        <img className="work-image" src={require(`../img/works/${props.image}.png`)} alt={props.title} />
          <div className="work-text">    
            <h3>{props.title}</h3>
            <p>{props.text}</p>
          </div>
        </div>
      </div>
    );
}