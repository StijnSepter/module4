var counter = 1;
document.getElementById("update").innerHTML = counter;

var knopMinder = document.getElementById("decrement");
knopMinder.onclick = function () {
  counter = counter - 1;
  if (counter == -1) {
    counter = 0;
  }

  document.getElementById("update").innerHTML = counter;
  var input_value = document.getElementById("input_veld").value;
  var antwoord = counter * input_value;
  document.getElementById("answer").innerHTML = antwoord;
};

var knopMeer = document.getElementById("increment");
knopMeer.onclick = function () {
  counter = counter + 1;

  document.getElementById("update").innerHTML = counter;
  var input_value = document.getElementById("input_veld").value;
  var antwoord = counter * input_value;
  document.getElementById("answer").innerHTML = antwoord;

  document.getElementById("inclusiveBTW");
  var antwoord = antwoord * 1.21;
  document.getElementById("inclusiveBTW").innerHTML = antwoord;
};
