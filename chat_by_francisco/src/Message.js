import React, { Component } from 'react';

const Message = (props) => {
  return (
    <div className="message">
      <strong>{props.name}</strong>: {props.text}
    </div>
  );
};

export default Message;
