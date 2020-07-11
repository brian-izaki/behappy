import React from 'react';
import './index.css';
import img from './img/logo.png';

function Header(){
  return (
    <div className="header pure-menu pure-menu-horizontal pure-menu-fixed" >
      <a href="/"> <img src={img} alt="logo" className="log"/> </a>
      <h4 className="label">Agenda de Gentilezas </h4>
    </div>
  );
  
} 

export default Header;