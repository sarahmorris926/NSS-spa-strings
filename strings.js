let input = document.getElementById("input");
let output = document.getElementById("output");
let btn = document.getElementById("btn");
let testString = "";


btn.addEventListener("click", function () {
  testString = input.value;
});

function reversal(input) {
  let newString = input.split("").reverse();  
  console.log(newString);
}
  

function alphabits() {
  
}
  
  
function palindrome() {
  
}
  

  reversal(testString);
  alphabits(testString);
  palindrome(testString);