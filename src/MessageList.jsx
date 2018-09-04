import React, {Component} from 'react';
import { Message, MessageSystem } from './Message.jsx';
// import MessageSystem from './Message.jsx';

class MessageList extends Component {
  render() {
    const messages = this.props.messages.map(message => {
      return <Message
        key={ message.key }
        username={ message.username }
        content={ message.content }
      />
    });

    return (
      <main className="messages">
        { messages }
        <MessageSystem />
      </main>
    );
  }
}

export default MessageList;
