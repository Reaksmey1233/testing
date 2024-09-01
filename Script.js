document.getElementById("answerButton").addEventListener("click", function () {
  var button = this;
  var answer = document.getElementById("answer");
  var vit = document.getElementById("vit");

  if (!button.classList.contains("active")) {
    button.classList.add("active");
    setTimeout(() => {
      answer.classList.remove("hidden");
      answer.classList.add("visible");
      vit.classList.add("visible2");
    }, 1000); // Show answer after 3 seconds
  }
});
