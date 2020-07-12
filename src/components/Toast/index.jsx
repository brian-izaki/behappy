// ta sendo utilizado um pacote para mostrar Mensagens de Toast,
// tbm ta sendo feito o encapsulamento do método que invoca o toast

import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

class Toast extends React.Component{
  
  sucesso(msg){
    toast.success(msg);
  }

  info(msg){
    toast.info(msg);
  }

  erro(msg){
    toast.error(msg);
  }

  render(){
    return (
      <ToastContainer 
        position='bottom-center'
        autoClose={5000}
        hideProgressBar={true}
        closeOnClick
        pauseOnHover
      />
    )
  }

}

export default Toast;