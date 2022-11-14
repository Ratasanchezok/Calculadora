document.querySelector(".equal").addEventListener ("click",animatekeyboard);

var keypad = document.querySelector(".keyboard");
var result = document.querySelector(".display")

function animatekeyboard(){
  keypad.classList.toggle("activekeyboard");
  result.classList.toggle("activeResult")
}