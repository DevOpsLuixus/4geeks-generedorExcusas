/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["the dog", "my granma", "his turtle", "my bird"];
let what = ["eat", "pissed", "crushed", "broked"];
let when = [
  "before the class",
  "right in time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function excuseGenerator(who, what, when) {
  let numeroWho = Math.floor(Math.random() * who.length);
  let numeroWhat = Math.floor(Math.random() * what.length);
  let numeroWhen = Math.floor(Math.random() * when.length);
  return (
    who[numeroWho] +
    " " +
    what[numeroWhat] +
    " " +
    "my homework" +
    " " +
    when[numeroWhen]
  );
}
function onLoad() {
  var excusa = document.getElementById("excuse");
  excusa.innerHTML = excuseGenerator(who, what, when);
}
window.onload = onLoad;
