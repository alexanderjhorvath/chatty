import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(props) {
    super()

    this.state = {
      username: '',
      content: '',
      type: ''
    }

    this.handleNewMessage = this.handleNewMessage.bind(this);
    this.handleChangeContent = this.handleChangeContent.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.updateChangeName = this.updateChangeName.bind(this);

  }

  handleChangeContent(event) {
    let content = event.target.value
    this.setState({
      content: content
    })
  }

  handleChangeName(event) {
    let username = event.target.value
    this.setState({
      username: username
    })
  }

  updateChangeName(event) {
    if (event.key === 'Enter') {
      console.log("Updating username to: " + event.target.value);
      let newUserName = event.target.value;
      console.log(newUserName);
      this.props.addMessage({
        content: `${this.props.user.name} changed their name to ${newUserName}`,
        type: "postNotification"
      })
      this.props.changeName(newUserName);
    }
  }

  handleNewMessage(event) {
    if (event.key === 'Enter') {
      console.log("its a thing! " + this.state.content);
      this.props.addMessage({
        username: this.props.user.name,
        content: this.state.content,
        type: "postMessage"
      })
      this.setState({
        content: '',
        type: ''
      })
    }
  }

  render() {
    const user = this.props.user.name;
    return (
        <footer className="chatbar">
          <input className="chatbar-username" defaultValue={ user } onKeyPress={ this.updateChangeName }/>
          <input
            type="text"
            className="chatbar-message"
            placeholder="Type a message and hit ENTER"
            value={ this.state.content }
            onChange={ this.handleChangeContent }
            onKeyPress={ this.handleNewMessage }
          />
        </footer>
    );
  }
}

export default ChatBar;
