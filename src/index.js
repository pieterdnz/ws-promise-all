import "@bospieter/ws-helper/styles.css";
import { add, initBody } from "@bospieter/ws-helper";

initBody("promise example");

add.li("log 1");

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("We are done promise p1");
  }, 2000);
});

p1.then(message => add.li("Promise done" + message));

// cool stuff ?
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("We are done promise p2");
  }, 5000);
});

Promise.all([p1, p2]).then(messages =>
  messages.map(message => add.li(message))
);

add.li("log 3 ");
