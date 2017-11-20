import React, { Component } from 'react';


const Message = (props) => {
  return (
    <div className="message">
      Hi there! {props.name} {props.text}
    </div>

  );
};

export default Message;
