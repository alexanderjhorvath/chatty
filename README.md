# Chatty App

A chat application with a clean, minimalist interface. Chatty was building using ReactJS and uses WebSockets to allow the clients to communicate with each other.

## Screenshots

!["Screenshots of Chat Interface"](https://github.com/tantousha/tweeter/blob/master/docs/ChatInterface.png)
!["Screenshots of Additional Client Connected"](https://github.com/tantousha/tweeter/blob/master/docs/TwoConnections.png)

## Usage

Start the WebSockets server:

1. Navigate to the chatty_server subfolder in your terminal of choice
2. Once in the folder, install dependencies and start the WebSocket Server

```
npm install
npm start
```

3. Once you have confirmed the server is running and listening on the configured PORT, open a new terminal window and navigate to the root Chatty folder.
4. In this root folder, once again install the dependencies and start the actual service:

```
npm install
npm start
```

### Dependencies

* React
* Webpack
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
