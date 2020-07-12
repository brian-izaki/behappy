import React from 'react';
import Image from '../Image';
import ButtonImage from '../ButtonImage';
import ManipularEvento from './ManipularEvento';

class ImageScroller{
  constructor(props){
    super(props);

    this.state = {
      manipularEvento: new ManipularEvento(
        this.props.elementos.length,
        this.props.selecionados.index
      ), 
    }
  }

  obterSelecionado(){
    return this.props.elementos[
      this.state.manipularEvento.index
    ];
  }

  renderizarImagem(entry, index){
    let eixoY = this.props.eixoY ? this.props.eixoY : 0;
    return (
      <li
        style={{
          paddingTop: '8px',
          position: 'absolute',
          zIndex: '-1',
          marginLeft: `${index * 140}px`
        }}
        key={index + entry.toString()}
      >
        <Image 
          eixoX = {entry.index}
          eixoY = {eixoY}
          width = {140}
          height = {140}
          backgroundHeight = {280}
          arquivo = {this.props.arquivo}
        />
      </li>
    )
  }

} 

export default ImageScroller;