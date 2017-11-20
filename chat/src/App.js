import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import MessageList from './MessageList';
import WriteMessage from './WriteMessage';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      messages: [
       {
          name: 'Paul',
          text: 'Come!!'
       },
       {
          name: 'Carla',
          text: 'Karaoke!!'
       },
       {
          name: 'Fransesco',
          text: 'Fast!!'
       }
      ]
    };

  }


  render() {
    const addMessage = (data) => {
      const messages = this.state.messages;
      messages.push(data);
      this.setState({ messages: messages })
    }


    return (
      <div>
        <MessageList />
        <WriteMessage />
      </div>
    );
  }
}

export default App;
