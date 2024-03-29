// este é um componete que vai concentrar a maior parte da UI
// Os métodos daqui podem refletir nos componentes filhos. 
// Os estados do usuário tambem são armazenados aqui, sofrem alteração conforme um método daqui é evocado pelos filhos ou por ele msm
// é utilizado um model para usuario (nele está contida uma validação de dados)

import React from "react";

import Usuario from '../../models/Usuario';

import Label from "../Label";
import Input from "../Input";
import GenderSelector from "../GenderSelector";
import Button from "../Button";
import ImageScroller from '../ImageScroller';
import Avatar from "../../models/Avatar";

import avatarImg from "../Image/img/avatars.png";

class NovoUsuario extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      usuario: new Usuario(),

      validacao: {
        nomeInvalido: false,
        generoInvalido: false,
      },

      primeiraVisaoCompleta: false,
    };
  }

  atualizarNome(e) {
    let usuario = this.state.usuario;
    usuario.nome = e.target.value;
    this.setState({
      usuario,
    });
  }

  atualizarGenero(e, genero) {
    e.preventDefault();
    let usuario = this.state.usuario;
    usuario.genero = genero;
    usuario.avatar = Avatar.obterTodos()[0];
    this.setState({
      usuario
    });
  }

  validar(e){
    e.preventDefault();
    
    let usuario = this.state.usuario;
    let validacao = this.state.validacao;
    validacao.nomeInvalido = !usuario.validarNome();
    validacao.generoInvalido = !usuario.validarGenero();
    
    let mensagem = '';
    let primeiraVisaoCompleta = false;
    if (validacao.nomeInvalido && validacao.generoInvalido){
      mensagem = 'Os campos nome e gênero estão inválidos';
    } else if (validacao.nomeInvalido){
      mensagem = 'O campo de nome é inválido';
    } else if (validacao.generoInvalido){
      mensagem = 'Selecione um genêro';
    } else {
      primeiraVisaoCompleta = true
    }

    if (!primeiraVisaoCompleta){
      this.props.erro(mensagem);
    }

    this.setState({
      validacao,
      primeiraVisaoCompleta,
    })
  }

  renderizarNome(){
    return(
      <section>
        <Label
            htmlFor="nome"
            texto="Quem é você?"
            valorInvalido={this.state.validacao.nomeInvalido}
          />
          <Input
            id="nome"
            placeholder="Nome"
            defaultValue={this.state.usuario.nome}
            maxLength="50"
            readOnly={false}
            valorInvalido={this.state.validacao.nomeInvalido}
            onChange={this.atualizarNome.bind(this)}
          />
      </section>
    )
  }

  renderizarGenero(){
    if (this.state.primeiraVisaoCompleta){
      return null;
    } else{
      return(
        <section>
          <Label 
              texto="Seu gênero:"
              valorInvalido = {this.state.validacao.generoInvalido}
            />
            <GenderSelector 
              genero={this.state.usuario.genero}
              atualizarGenero = {this.atualizarGenero.bind(this)}
              valorInvalido = {this.state.validacao.generoInvalido}
            />
        </section>
      )
    }
  }

  renderizarBotoes(){
    if(this.state.primeiraVisaoCompleta){
      return (
        <section>

          <Button 
              texto = "Voltar"
              onClick = {e => {
                e.preventDefault();
                let usuario = this.state.usuario;
                usuario.avatar = Avatar.obterTodos()[0];
                this.setState({
                  usuario,
                  primeiraVisaoCompleta: false,
                })
              }}
          />
          <Button 
              principal
              texto = "Salvar"
              onClick = {e => {
                e.preventDefault();
                this.props.onSubmit(this.state.usuario);
              }}
          />
        </section>
      )
    } else {
      return(
        <Button 
            principal
            texto = "Próximo"
            onClick = {this.validar.bind(this)}
        />
      )
    }
  }

  renderizarAvatar(){
    if (this.state.primeiraVisaoCompleta) {
      return (
        <section>
          <Label 
            texto="Escolha seu avatar:"
          />
          <ImageScroller 
            arquivo={avatarImg}
            eixoY = {(this.state.usuario.genero === 'm' ? 0 : 1)}

            elementos = {Avatar.obterTodos()}
            selecionados = {this.state.usuario.avatar}
            onChange = {avatar => {

              let usuario = this.state.usuario;
              usuario.avatar = avatar;
              this.setState({
                usuario,
              })

            }}
          />
        </section>
      )
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="center">
        <form className="pure-form pure-form-stacked">
          {this.renderizarNome()}
          {this.renderizarGenero()}
          {this.renderizarAvatar()}
          {this.renderizarBotoes()}
        </form>
      </div>
    );
  }
}

export default NovoUsuario;
