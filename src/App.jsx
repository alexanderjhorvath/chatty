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
      "notifications": []
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
        case "incomingNotification":;
          this.setState({
            notifications: {
              ...this.state.notifications,
              data
            }
          })
          break;
      }
    }
  }

  changeName = (username) => {
    console.log("Before: " + username);
    this.setState({
      currentUser: {name: username}
    });
    setImmediate(() => console.log(this.state.currentUser));
  }

  addMessage(message) {
    console.log("incoming! " + message.content);
      socket.send(JSON.stringify(message));
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>
    } else {
      return (
        <div>
          <nav className="navbar">
            <a href="/" className="navbar-brand">Chatty</a>
          </nav>
          <MessageList messages={this.state.messages} notifications={this.state.notifications}/>
          <ChatBar user={this.state.currentUser} addMessage={this.addMessage} changeName={this.changeName}/>
        </div>

      );
    }
  }
}
export default App;
