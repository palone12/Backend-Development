const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on("Waterfall", () => {
  console.log("Please turn off the motor");
  setTimeout(() => {
    console.log("Please turoof the motor");
  }, 3000);
});

console.log("Tank filled 50%");
console.log("Tank filled 60%");
console.log("Tank filled 80%");
myEmitter.emit("Waterfall");
console.log("Tank Overflowed");
