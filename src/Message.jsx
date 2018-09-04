import React, {Component} from 'react';

class Message extends Component {
  render() {
    return (
      <div class="message">
        <span class="message-username">Anonymous1</span>
        <span class="message-content">I won't be impressed with technology until I can download food.</span>
      </div>
    );
  }
}

class MessageSystem extends Component {
  render() {
    return (
      <div class="message system">
        Anonymous1 changed their name to nomnom.
      </div>
    );
  }
}

export { Message, MessageSystem };
// export MessageSystem;
