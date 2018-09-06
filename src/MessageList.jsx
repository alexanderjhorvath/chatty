import React, {Component} from 'react';
import { Message, MessageSystem } from './Message.jsx';
// import MessageSystem from './Message.jsx';

class MessageList extends Component {
  render() {
    const messages = this.props.messages.map(message => {
      return <Message
        id={ message.id }
        username={ message.username }
        content={ message.content }
      />
    });

    const notifications = this.props.notifications.map(notification => {
      return <MessageSystem
        notification={ notification.content }
      />
    })

    return (
      <main className="messages">
        { messages }
        { notifications }
      </main>
    );
  }
}

export default MessageList;
