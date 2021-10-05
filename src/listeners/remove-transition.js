import { removeTransition } from "../handlers/remove-transition.js";
// convert the DOM elements to an array
// find all elements in the document with a class 'key'
const keys = Array.from(document.querySelectorAll(".key"));
// loop through a collection of DOM elements
// each key has a event listener add to it
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
