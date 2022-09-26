// Existing app.js code.
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
});

// Getting reference for input field and toggle button
// by IDs.
const input = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

// Adding event listner to reveal password.
togglePassword.addEventListener("click", function (e) {
  // This function will check if input type is text
  // if this is the case then it will change inputy type
  // to password from text and vice versa.
  if (input.type === "text") {
    // input type is text
    input.type = "password"; // change type to password
  } else {
    // input type is already password
    input.type = "text"; // change type to text.
  }
});
