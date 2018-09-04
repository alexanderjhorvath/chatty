import React, {Component} from 'react';
import { Message, MessageSystem } from './Message.jsx';
// import MessageSystem from './Message.jsx';

class MessageList extends Component {
  render() {
    return (
      <main className="messages">
        <Message />
        <MessageSystem />
      </main>
    );
  }
}

export default MessageList;
