/**
 * Entry point for users sorting the list of words in this app.
 * It is called each time the input selection changes.
 *
 * @param {Event} event - The event triggered by changing the input.
 */
export const removeTransition = (event) => {
   // skip if it's not a transform event
   if (event.propertyName !== "transform") return undefined;
   event.target.classList.remove("playing");
};
