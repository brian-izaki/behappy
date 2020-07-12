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
          erro={msg=>this.refs.toast.erro(msg)}
        />
        <Toast ref="toast" />
      </div>
    );
  }
}

export default App;