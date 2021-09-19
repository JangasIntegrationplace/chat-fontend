export default class Socket {
  constructor(endpoint) {
    this.socket = new WebSocket(endpoint);
  }
  onOpen(cb) {
    this.socket.onopen = (e) => {
      cb(e);
    };
  }
  onClose(cb) {
    this.socket.onclose = (e) => {
      cb(e);
    };
  }
  onMessage(cb) {
    this.socket.onmessage = (e) => {
      cb(e);
    };
  }
  onError(cb) {
    this.socket.onerror = (e) => {
      cb(e);
    };
  }
  close() {
    this.socket.close();
  }
}
