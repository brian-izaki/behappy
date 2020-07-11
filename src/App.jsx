import React from 'react';
import Header from './components/Header';
import NovoUsuario from './components/NovoUsuario';


class App extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <NovoUsuario />
      </div>
    );
  }
}

export default App;