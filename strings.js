let input = document.getElementById("input");
let outputRev = document.getElementById("outputRev");
let outputAlpha = document.getElementById("outputAlpha");
let outputPal = document.getElementById("outputPal");
let btn = document.getElementById("btn");
let testString = "";

// Event listeners

btn.addEventListener("click", function () {
  testString = input.value;
  reversal(testString);
  alphabits(testString);
  palindrome(testString);
});

input.addEventListener('keyup', function(event) {
  if (event.which === 13) {
    testString = input.value;
    reversal(testString);
    alphabits(testString);
    palindrome(testString);
  }
});



function reversal(input) {
  let newString = input.split("").reverse();  
  outputRev.innerHTML = newString.join("");
}
  

function alphabits(input) {
  let newerString = input.split("").sort();
  outputAlpha.innerHTML = newerString.join("");
}
  
  
function palindrome(input) {
  let newestString = input.split("").reverse().join("");
  if (newestString === input) {
    outputPal.innerHTML = "Your string is a palindrome!";
  } else {
    outputPal.innerHTML = "Whoops - no palindrome.";
  }
}
