import Avatar from "./Avatar";
import Repository from "../infrastructure/Repository";
const repository = new Repository();

class Usuario {
  constructor(){
    this.nome = '';
    this.genero = '';
    this.avatar = Avatar.obterTodos()[0];
  }

  validarNome(){
    if (
      typeof this.nome === 'string'&&
      this.nome.length !== 0 &&
      this.nome.length <= 40) {
        
        return true;
    }
    return false;
  }

  validarGenero(){
    return ['m', 'f'].some(param => {
      return this.genero === param;
    });
  }

  salvar(callback){
    repository.salvar(this, callback);
  }

  // o primeiro parametro é uma callback q executa na classe Repository
  // lá busca os dados do local storage
  // se tiver executa primeiro parametro
  // caso contrario executa falha
  // obs: a função sucesso irá enviar um usuário instanciado, que poderá ser consumedo igual à arrow function desse método.
  static obter(sucesso, falha){
    repository.obter(json => {
      let usuario = new Usuario();
      usuario.nome = json.nome;
      usuario.genero = json.genero;
      usuario.avatar = new Avatar(
        json.avatar.index, 
        json.avatar.descricao
      );
      sucesso(usuario)
    }, falha)
  }

  toString(){
    return `${this.nome}, ${this.avatar.toString()}`
  }
};

export default Usuario;