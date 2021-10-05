import { removeTransition } from "../handlers/remove-transition.js";

// Find all elements in the document with a class 'key'
const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
