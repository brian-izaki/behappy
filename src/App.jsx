import React from "react";
import Header from "./components/Header";
import NovoUsuario from "./components/NovoUsuario";
import Toast from "./components/Toast";
import Usuario from "./models/Usuario";

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      usuario: undefined
    }

  }
  
  componentDidMount(){
    Usuario.obter(
      (usuarioLog) => {
        // console.log('teste')
        this.setState({ usuario: usuarioLog });
      },
      () => {
        // console.log(this)
        this.setState({ usuario: undefined });
      }
    );
  }

  msgNovoUsuario(usuario) {
    let genero = usuario.genero === "m" ? "o" : "a";
    this.refs.toast.sucesso(`Seja bem-vind${genero} ${usuario.nome}!`);
  }

  renderizarNovoUsuario() {
    let usuario = this.state.usuario;
    // console.log(!!usuario)

    if (usuario) {
      return (
        <div style={{ marginTop: "140px", textAlign: "center" }}>
          <b>
            Usuário obtido do <i>localStorage</i>
          </b>
          <br />
          {usuario.toString()}
        </div>
      );
    } else {
      return (
        <NovoUsuario
          onSubmit={(usuario) => {
            usuario.salvar(() => {
              this.setState(
                {
                  usuario,
                },
                () => {
                  this.msgNovoUsuario(usuario);
                }
              );
            });
          }}
          // é pego o id pela propriedade refs
          erro={(msg) => this.refs.toast.erro(msg)}
        />
      );
    }
  }

  render() {
    return (
      <div>
        <Header />
        {this.renderizarNovoUsuario()}
        {/* ref é tipo um id */}
        <Toast ref="toast" />
      </div>
    );
  }
}

export default App;
