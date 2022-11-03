var emailField = document.querySelector(".email");
var passwordField = document.querySelector(".password");
var submitBtn = document.querySelector(".bhaargavi");

var infoDiv = document.querySelector(".info");

submitBtn.addEventListener("click", function () {
  infoDiv.innerHTML =
    "Email: " + emailField.value + " Password: " + passwordField.value;
});
