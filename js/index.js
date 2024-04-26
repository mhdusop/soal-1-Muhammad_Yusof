function isPalindrome(str) {
   str = str.replace(/\s+/g, '').toLowerCase();
   let length = str.length;
   for (let i = 0; i < length / 2; i++) {
      if (str[i] !== str[length - 1 - i]) {
         return false;
      }
   }
   return true;
}

function checkPalindrome() {
   var inputStr = document.getElementById('inputString').value;
   var result = isPalindrome(inputStr);
   var resultText = result ? "TRUE" : "FALSE";
   document.getElementById('result').innerText = "Result: " + resultText;
}