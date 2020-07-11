import React from 'react';
import Label from '../Label';
import Input from '../Input';


class NovoUsuario extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      
      usuario: {
        nome: '',
      },

      validacao: {
        nomeInvalido: true,
      },

    }
  }
  
  atualizarNome(e){
    let usuario = this.state.usuario;
    usuario.nome = e.target.value;
    this.setState({
      usuario: usuario,
    })
  }

  render(){
    return(
      <div className="center">
        <form className="pure-form pure-form-stacked"> 
          <Label 
            htmlFor='nome' 
            texto='Quem é você?' 
            valorInvalido = {this.state.validacao.nomeInvalido}
          />
          <Input 
            id='nome' 
            placeholder='Nome' 
            defaultValue={this.state.usuario.nome}
            maxLength='50'
            readOnly={false}

            valorInvalido={this.state.validacao.nomeInvalido}
            onChange={this.atualizarNome.bind(this)}

          />

          
        </form>
      </div>
    )
  }
}

export default NovoUsuario;