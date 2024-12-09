function tellFortune(numChildren, partnerName, location, jobTitle) {
  let fortune = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numChildren} kids.`;
  document.getElementById("fortune").innerHTML += `<p>${fortune}</p>`;
}

function calculateDogAge(puppyAge) {
  if (Number.isNaN(puppyAge) || puppyAge < 0) {
      document.getElementById("dogAge").innerHTML += `<p>Please enter a valid age!</p>`;
      return;
  }
  let dogAge = puppyAge * 7;
  let result = `Your doggie is ${dogAge} years old in dog years!`;
  document.getElementById("dogAge").innerHTML += `<p>${result}</p>`;
}

function reverseNumber(number) {
  if (Number.isNaN(number)) {
      document.getElementById("reverseNumber").innerHTML += `<p>Please enter a valid number!</p>`;
      return;
  }
  let numString = number.toString();
  let newNumber = numString.split("").reverse().join("");
  document.getElementById("reverseNumber").innerHTML += `<p>${newNumber}</p>`;
}

function alphabet(word) {
  if (!word.trim()) {
      document.getElementById("alphabetOrder").innerHTML += `<p>Please enter a valid word!</p>`;
      return;
  }
  let newWord = word.split("").sort().join("");
  document.getElementById("alphabetOrder").innerHTML += `<p>${newWord}</p>`;
}

function titleCase(sentence) {
  if (!sentence.trim()) {
      document.getElementById("titleCase").innerHTML += `<p>Please enter a valid sentence!</p>`;
      return;
  }
  let result = sentence
      .toLowerCase()
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  document.getElementById("titleCase").innerHTML += `<p>${result}</p>`;
}