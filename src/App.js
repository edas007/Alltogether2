import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './ChatWindow'

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/


class App extends Component {
  state = {
    users: [{ username: 'Amy' }, { username: 'John' }],
    messages: [
      { username: 'Amy', text: 'Hi, Jon!' },
      { username: 'Amy', text: 'How are you?' },
      { username: 'John', text: 'Hi, Amy! Good, you?' },
    ],
  }

  AnadirMensaje = (usuario, texto) => {
    console.log('apretado usuario=' + usuario);
    console.log('apretado texto=' + texto);
    this.setState(oldState => ({
      messages:[...oldState.messages, {username: usuario, text: texto}],
    }))
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
    
        <div className="container">
            <ChatWindow users={this.state.users} messages={this.state.messages} userIndex='0' cuandoApreteSend={this.AnadirMensaje}/>
            <ChatWindow users={this.state.users} messages={this.state.messages} userIndex='1' cuandoApreteSend={this.AnadirMensaje}/>
        </div>
      </div>
    );
  }
}

export default App;
