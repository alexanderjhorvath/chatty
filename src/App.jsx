import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

const socket = new WebSocket("ws://localhost:3001");

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      "currentUser": {"name": "Bob"},
      "messages": [
        {
          "key": 1234,
          "username": "Bob",
          "content": "Has anyone seen my marbles?",
        },
        {
          "key": 1235,
          "username": "Anonymous",
          "content": "No, I think you lost them. You lost your marbles Bob. You lost them for good."
        }
      ]
    };

    this.addMessage = this.addMessage.bind(this);

  }

  componentDidMount() {
    console.log("componentDidMount <App />");
    socket.onopen = function (event) {
      socket.send("Here is a test message!");
      console.log("Message sent");
    };
    setTimeout(() => {
      console.log("Simulating incoming message");
      const newMessage = {key: 3, username: "Michelle", content: "Hello There!"};
      const messages = this.state.messages.concat(newMessage)
      this.setState({messages: messages})
    }, 3000);
  }

  addMessage(message) {
    console.log("incoming! " + message);
    this.setState({
      messages: [
        ...this.state.messages,
        message
      ]
    })
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
          <MessageList messages={this.state.messages}/>
          <ChatBar user={this.state.currentUser} addMessage={this.addMessage}/>
        </div>

      );
    }
  }
}
export default App;
