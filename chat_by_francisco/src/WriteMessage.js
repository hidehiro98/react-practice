import React, { Component } from 'react';

class WriteMessage extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', text: '' };
  }
  render() {
    const changeName = (event) => {
      this.setState({ name: event.target.value });
    };
    const changeText = (event) => {
      this.setState({ text: event.target.value });
    };
    const submitForm = (e) => {
      e.preventDefault();
      this.props.addMessage(this.state);
      this.setState({ name: '', text: '' });
    };
    return (
      <form onSubmit={submitForm}>
        <div>
          <input name="name" onChange={changeName} value={this.state.name} placeholder="Name" />
        </div>
        <div>
          <input name="text" onChange={changeText} value={this.state.text} placeholder="Message" />
        </div>
        <div>
          <input type="submit" value="Send Message" />
        </div>
      </form>
    );
  }
}

export default WriteMessage;
