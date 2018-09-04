import React, {Component} from 'react';

class ChatBar extends Component {
  render() {
    const user = this.props.user.name;
    return (
        <footer className="chatbar">
          <input className="chatbar-username" value={ user } />
          <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
        </footer>
    );
  }
}

export default ChatBar;
