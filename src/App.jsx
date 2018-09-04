import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

const messages = {
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
}

function getMessagesFromAPI() {
  return new Promise(resolve => {
    setTimeout(resolve, 3000);
  }).then(() => messages);
}

class App extends Component {
  constructor(props) {
    super();

    this.state = {loading: true};
  }

  componentDidMount() {
    getMessagesFromAPI().then(messages => {
      this.setState({
        loading: false,
        messages
      });
    });
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
          <MessageList messages={this.state.messages.messages}/>
          <ChatBar user={this.state.messages.currentUser} />
        </div>

      );
    }
  }
}
export default App;
