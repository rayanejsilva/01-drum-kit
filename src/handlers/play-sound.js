/**
 * Entry point for users adding a word to the list.
 * It is called each time the user clicks the "add word" button.
 *
 * @param {Event} event - The event triggered when the user clicks the button.
 */
export const playSound = (event) => {
   const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
   const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
   if (!audio) return;
   key.classList.add("playing");
   audio.currentTime = 0;
   audio.play();
};
