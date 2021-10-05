/**
 * It plays the audio clip associated with the keypress.
 *
 * @param {Event} event - The event triggered when the user presses the key.
 */
export const playSound = (event) => {
   // select the audio elements with the data-key attribute
   const audioElement = document.querySelector(
      `audio[data-key="${event.keyCode}"]`
   );
   // select the elements with class key
   const divKey = document.querySelector(`.key[data-key="${event.keyCode}"]`);
   // stop the function from running if the key pressed doesn't match one of the keys defined on our page
   if (!audioElement) return;
   // add a class to the specific element that matches with the keypress
   divKey.classList.add("playing"); // transition effects
   audioElement.currentTime = 0; //rewind the audio to the start
   audioElement.play();
};
