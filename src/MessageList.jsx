import React, {Component} from 'react';
import { Message, MessageSystem } from './Message.jsx';
// import MessageSystem from './Message.jsx';

class MessageList extends Component {
  render() {
    return (
      <main class="messages">
        <Message />
        <MessageSystem />
      </main>
    );
  }
}

export default MessageList;
