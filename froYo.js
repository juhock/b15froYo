const userInput = prompt(
    "Please enter a list of froyo flavors, separated by commas.",
    "vanilla, vanilla, strawberry, coffee, coffee"
);

const froyoFlavs = userInput.split(",");
const transfNumbers = {}; 

for (let i = 0; i < froyoFlavs.length; i++) {
    const flavor = froyoFlavs[i].trim(); 
    if (transfNumbers[flavor]) {
        transfNumbers[flavor]++;
    } else {
        transfNumbers[flavor] = 1;
    }
}

console.log(transfNumbers);