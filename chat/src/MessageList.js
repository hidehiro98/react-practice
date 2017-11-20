import React, { Component } from 'react';

import Message from'./Message'

class MessageList extends Component {
  constructor (props) {
    super(props);


  }

  render () {


    // setInterval(() => {
    //   const messages = this.state.messages;

    //   messages.push({
    //     name: "New Person",
    //     text: "Hi!"
    //   });

    //   this.setState({ messages: messages });
    // }, 2000)


    console.log(this.props);

    const ret = this.props.messages.map(msg => (
      // <div>{msg.name}: {msg.text}</div>
      <Message name={msg.name} text={msg.text} />
    ));

    console.log(ret);

    return (
      <div className="messagelist">
        <h2>Messages here!</h2>
        {ret}
      </div>

    );
  }
}

// const MessageList = (props) => {
//   return (
//     <div>
//       <Message name="Carla" text="Le Wagon"/>
//       <Message />
//       <Message />
//     </div>
//   )
// }

export default MessageList;
