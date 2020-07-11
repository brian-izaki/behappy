import React from "react";
import "./index.css";
import GenderImage from "../GenderImage";

export default function GenderButton(props) {
  return (
    <a 
      href="#!" 
      className={
        props.selecionado ? 
        "gender-button selected-gender-button" :
        "gender-button"
      }
      onClick={e => props.atualizarGenero(e, props.genero)}
    >
      <GenderImage 
        genero={props.genero} 
      />
    </a>
  );
}
