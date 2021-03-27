$('body').css('background-image', 'url("https://i.pinimg.com/originals/86/66/85/866685bdd4bbc516ec1a13c956d4d7bf.jpg")');

values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "/", "%", "x", "*", "Del", ".", "C", "c", "=", "Enter", "Backspace"]

//**************************  ON SCREEN FUNCTIONS *************************************//
$("button.button").mouseover(function() {
  $(this).css("background-color", "#181810");
}).mouseleave(function() {
  $(this).css("background-color", "#171313");
}).click(function() {
  $(this).css("background-color", "#1a1a1b")

  var audio = new Audio(this.innerHTML + ".mp3");
  audio.play();
  if (this.innerHTML != "=" && this.innerHTML != "x" && this.innerHTML != "÷" && this.innerHTML != "Del" && this.innerHTML != "+" && this.innerHTML != "-") {
    $("p.display").append(this.innerHTML);
  }
});
$("button.button.opr").mouseover(function(){
  $(this).css("background-color", "#F89D13");
}).mouseleave(function() {
  $(this).css("background-color", "#f88f01  ");
}).click(function() {
  $(this).css("background-color", "#ffc93c")
 var audio = new Audio(this.innerHTML + ".mp3");
  audio.play();
  if (this.innerHTML != "=" && this.innerHTML != "x" && this.innerHTML != "÷" && this.innerHTML != "Del") {
    $("p.display").append(this.innerHTML);
  }
  if (this.innerHTML == "x") {
    $("p.display").append("*");
  }
  if (this.innerHTML == "÷") {
    $("p.display").append("/");
  }
  if (this.innerHTML == "=") {
    var cal = document.querySelector("p.display").innerHTML;
    var ans = eval(cal);
    document.querySelector("p.display").innerHTML = ans;
  }
});
$(".input").mouseover(function(){
  $(this).css("background-color", "#dfdfdf");
}).mouseleave(function() {
  $(this).css("background-color", " #fbf7f0");
}).click(function() {
  $(this).css("background-color", "#f1f3f8")

  if (this.innerHTML == "C") {
    $("p.display").text(" ");
    var audio = new Audio("C.mp3");
    audio.play();
  }
  if (this.innerHTML == "Del") {
    var str = document.querySelector("p.display").innerHTML;
    str = str.slice(0, -1);
    document.querySelector("p.display").innerHTML = str;
    var audio = new Audio("Del.mp3");
    audio.play();
  }});




//*********************************** KEY PRESS FUNCTIONS ****************************//

$(document).keydown(function(event) {
  // $(event.key).css("background-color", "#E2BCB7")
  if (values.includes(event.key)) {
    var audio = new Audio(event.key + ".mp3");
    audio.play();
    if (event.key != "=" && event.key != "x" && event.key != "Enter" && event.key != "Backspace") {
      $("p.display").append(event.key);
    }
  }
  if (event.key == "c") {
    $("p.display").text(" ");
  }
  if (event.key == "x") {
    $("p.display").append("*");
  }
  if (event.key == "*") {
    var audio = new Audio("x.mp3");
    audio.play();
  }
  if (event.key == "/") {
    var audio = new Audio("÷.mp3");
    audio.play();
  }

  if (event.key == "Enter") {
    var audio = new Audio("=.mp3");
    audio.play();
    var cal = document.querySelector("p.display").innerHTML;
    var ans = eval(cal);
    document.querySelector("p.display").innerHTML = ans;
  }
  if (event.key == "Backspace") {
    var str = document.querySelector("p.display").innerHTML;
    str = str.slice(0, -1);
    document.querySelector("p.display").innerHTML = str;
    var audio = new Audio("Del.mp3");
    audio.play();
  }

});
