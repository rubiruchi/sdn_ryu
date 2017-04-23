/***
  WEBSOCKETS
 ***/

var ClientWebSocket = function() {

  var url = 'ws://localhost:4445/ws/stream/';

  this.socket = new ReconnectingWebSocket(url);

  this.socket.onmessage = function(msg) {

  };

  this.socket.onopen = function() {
    console.log('%cWebSocket ON', 'color:green;');
  };

  this.socket.onclose = function() {
    console.log('%cWebSocket OFF', 'color:red;');
  };

  this.disconnect = function() {
    this.socket.close();
  };

  /**
   * Sends message via websocket
   * @param {JSON} msg Message in JSON format
   */
  this.send = function(msg) {
    this.socket.send(JSON.stringify(msg))
  };

};
