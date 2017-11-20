import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MessageList from './MessageList';
import WriteMessage from './WriteMessage';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      messages: [{
        name: 'Paul',
        text: 'Come study here!'
      },  {
        name: "Carla",
        text: 'Le wagon is cool!'
      }]
    };
  }
  render() {
    console.log(this.state);

    const addMessage = (data) => {
      const messages = this.state.messages;
      messages.push(data);
      this.setState({ messages: messages });
    };

    return (
      <div>
        <MessageList messages={this.state.messages} />
        <WriteMessage addMessage={addMessage} />
      </div>
    );
  }
}

export default App;
