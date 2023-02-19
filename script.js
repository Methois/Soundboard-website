var buttons = document.querySelectorAll(".button");

buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    var sound = new Audio(button.dataset.sound);
    sound.play();
  });
});
