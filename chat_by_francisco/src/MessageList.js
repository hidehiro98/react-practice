import React, { Component } from 'react';
import Message from './Message';

class MessageList extends Component {
  constructor(props){
    super(props);
  }
  render () {
    // console.log(this.state);
    const ret = this.props.messages.map(msg => (
      <Message name={msg.name} text={msg.text} />
    ));
    return (
      <div className="messagelist">
        <h2>Messages here!</h2>
        {ret}
      </div>
    );
  }
}

// const MessageList = () => {
//   return (
//     <div>
//       <Message name="Paul" text="" />
//       <Message name="Carla" text="Le Wagon is cool!" />
//       <Message name="Jared" text="Come here!" />
//       <Message name="Francisco" text="Study here!" />
//       <Message name="Doge" text="Wow" />
//     </div>
//   );
// }

export default MessageList;
