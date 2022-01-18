import EventEmitter from "events";

class ConsoleEmitter extends EventEmitter {}

const consoleEvents = new ConsoleEmitter();

let log = (...args) => {
  consoleEvents.emit("log", ...args);
};

export { consoleEvents, log };
