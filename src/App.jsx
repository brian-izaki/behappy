import React from 'react';
import Header from './components/Header';
import NovoUsuario from './components/NovoUsuario';
import Toast from './components/Toast';

class App extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <NovoUsuario 
          onSubmit = {usuario => {
            let genero = usuario.genero === 'm' ? 'o' : 'a';

            this.refs.toast.sucesso(`Seja bem-vind${genero} ${usuario.nome}!`);
          }}
          // é pego o id pela propriedade refs
          erro={msg=>this.refs.toast.erro(msg)}
        />
        {/* ref é tipo um id */}
        <Toast ref="toast" />
      </div>
    );
  }
}

export default App;