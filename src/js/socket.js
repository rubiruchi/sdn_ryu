/***
  WEBSOCKETS
 ***/

var ClientWebSocket = function() {

  var url = 'ws://' + window.location.host + '/ws/';

  this.socket = new ReconnectingWebSocket(url);

  this.socket.onmessage = function(msg) {
    console.log(msg.data);
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
