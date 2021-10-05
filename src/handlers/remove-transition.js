/**
 * It resets the state of the element after the transition is played.
 *
 * @param {Event}
 */
export const removeTransition = (event) => {
   // skip if it's not a transform event
   if (event.propertyName !== "transform") return undefined;
   //remove playing class in order to reset the element to it's original state
   event.target.classList.remove("playing");
};
