

// Getting reference of textarea using query selector
// method since there is no ids associated for this textarea.
const textarea = document.querySelector("textarea");
// Getting refrence of stat for showing words and characters count
const stat = document.getElementById("stat");
// add onkeyup event on textarea this event will fire on every key up.
textarea.addEventListener("onkeyup", function (e) {
    // initialize words and chars variable to hold word and chars count.
  let words = 0;
  let chars = 0;
  if (textarea.value) { // check if there is something written in textarea.
    // get word count, textarea.value return value written in textarea
    // trim function removes all trailing and leading spaces.
    // split function splits string into array of word and calling length on 
    // result of split will give us total words.
    words = textarea.value.trim().split(" ").length;
    // to get chars count simpliy trim input value first then 
    // access length property to get number of characters.
    chars = textarea.value.trim().length;
  }
  // set stat with textarea words and characters count.
  stat.innerHTML =
    "You've written " + words + " words and " + chars + " characters.";
});
