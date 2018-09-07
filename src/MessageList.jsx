import React, {Component} from 'react';
import { Message } from './Message.jsx';
// import MessageSystem from './Message.jsx';

class MessageList extends Component {

  render() {
    let messages = {};

    messages = this.props.messages.map(message => {
      return <Message
        id={ message.id }
        username={ message.username }
        content={ message.content }
        type={ message.type }
      />
    });

    return (
      <main className="messages">
        { messages }
      </main>
    );
  }
}

export default MessageList;
