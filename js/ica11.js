function tellFortune(numChildren, partnerName, location, jobTitle) {
    let fortune = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numChildren} kids.`;
    document.getElementById('fortune').innerHTML += `<p>${fortune}</p>`;
}

console.log(tellFortune(3, 'Alex', 'New York', 'Software Developer'));
console.log(tellFortune(1, 'Jordan', 'Paris', 'Artist'));
console.log(tellFortune(2, 'Taylor', 'Tokyo', 'Teacher'));


function calculateDogAge(puppyAge) {
    let dogAge = puppyAge * 7;
    let result = `Your doggie is ${dogAge} years old in dog years!`;
    document.getElementById('dog-age').innerHTML += `<p>${result}</p>`;
}

calculateDogAge(1);
calculateDogAge(3);
calculateDogAge(5);
