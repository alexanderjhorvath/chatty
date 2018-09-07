import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

const socket = new WebSocket("ws://localhost:3001");

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      "currentUser": {"name": "Bob"},
      "messages": [],
      "notifications": [],
      "usersOnline": 0
    };

    this.addMessage = this.addMessage.bind(this);
    this.changeName = this.changeName.bind(this);

  }

  componentDidMount() {
    console.log("componentDidMount <App />");
    socket.onmessage = (event) => {
      console.log(event);
      let data = JSON.parse(event.data);

      // sorting incoming data between messages and notifications
      switch(data.type) {
        case "incomingMessage":
          this.setState({
            messages: [
              ...this.state.messages,
              data
            ]
          })
          break;
        case "incomingNotification":
          this.setState({
            messages: [
              ...this.state.messages,
              data
            ]
          })
          break;
        case "incomingUserCount":
         this.setState({
           usersOnline: data.amount,
         })
         break;
      }
    }
  }

  // updating username in state
  changeName = (username) => {
    this.setState({
      currentUser: {name: username}
    });
  }

  // sending messages/notifications to the socket server
  addMessage(message) {
      socket.send(JSON.stringify(message));
  }

  render() {
    let userCounter;
    if (this.state.usersOnline === 1) {
      userCounter = `${this.state.usersOnline} chatter online`;
    } else {
      userCounter = `${this.state.usersOnline} chatters online`;
    }
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
          <span className="navbar-userCount">{ userCounter }</span>
        </nav>
        <MessageList messages={this.state.messages} notifications={this.state.notifications}/>
        <ChatBar user={this.state.currentUser} addMessage={this.addMessage} changeName={this.changeName}/>
      </div>

    );
  }
}
export default App;
