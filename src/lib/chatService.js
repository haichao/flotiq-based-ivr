import EventEmitter from "events";

class ChatEmitter extends EventEmitter {}

const chatEvents = new ChatEmitter();

let postMessage = message => {
  chatEvents.emit("message", message);
};
let postIncommingMessage = message => {
  chatEvents.emit("incomming-message", message);
};
function nextMessage(timeout) {
  return new Promise((res, rej) => {
    chatEvents.once("message", message => {
      res(message);
    });
    if (timeout) setTimeout(rej, timeout);
  });
}
window.chat = { chatEvents, postMessage, nextMessage };
export { chatEvents, postIncommingMessage, postMessage, nextMessage };
