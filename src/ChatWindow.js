import React from 'react';
import './App.css';

class ChatWindow extends React.Component{
  constructor(props) {
   super(props);
    this.manejarAnadirMensaje = this.manejarAnadirMensaje.bind(this);
    this.manejarCambioDeTexto = this.manejarCambioDeTexto.bind(this);
  }
  state={
    mensajeEscrito:'',
  }
  
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  isDisabled = () => {
    return this.state.mensajeEscrito==='';
  };

	manejarAnadirMensaje(evento) {
      evento.preventDefault();  //para evitar que el form haga refresco
      //console.log('apretado valor evento=' + this.state.mensajeEscrito);
      this.props.cuandoApreteSend(this.props.users[this.props.userIndex].username, this.state.mensajeEscrito);
    }

	manejarCambioDeTexto(evento) {
      this.setState({
      	mensajeEscrito: evento.target.value
      })
    }

  render(){
    const { users, messages, userIndex} = this.props
    return(
          <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{users[userIndex].username}</div>

            <ul className="message-list">
              {messages.map((message, index) => (
                <li
                  key={index}
                  className={
                    message.username === users[userIndex].username ? 'message sender' : 'message recipient'
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))}
            </ul>

            <div>
              <form className="input-group">
                <input type="text" className="form-control" placeholder="Enter your message..." onChange={this.manejarCambioDeTexto}/>
                <div className="input-group-append">
                  <button className="btn submit-button" disabled={this.isDisabled()} onClick={this.manejarAnadirMensaje}>
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
	)
  }
}

export default ChatWindow;