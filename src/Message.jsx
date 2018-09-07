import React, {Component} from 'react';

class Message extends Component {
  render() {
    return (
      <div className={ this.props.type }>
        <span className="message-username">{ this.props.username }</span>
        <span className="message-content">{ this.props.content }</span>
        { this.props.notification }
      </div>
    );
  }
}

class MessageSystem extends Component {
  render() {
    return (
      <div className={this.props.type}>
        { this.props.notification }
      </div>
    );
  }
}

export { Message, MessageSystem };
// export MessageSystem;
