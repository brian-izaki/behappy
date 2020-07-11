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
    >
      <GenderImage 
        genero={props.genero} 
      />
    </a>
  );
}
