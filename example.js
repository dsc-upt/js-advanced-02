function showName(firstName)
{
    console.log(firstName);
}
showName("cala");
// cand vreti sa va ganditi la ce e aia null, ce e aia undefined
// ganditi-va la memeu ala cu hartie igienica

function showName1(firstName, ...args) //args o sa fie o lista cu
    // toate celelalte valori pe care le dai ca paramentri => omgomgomgomgomgm
{
    console.log(args);
}
// showName1("hihi", 3,4,5,6)
// functie anonima
const showMyName = function (firstName){
    console.log(firstName);
}

let myArray = [1, 3, 5, 2, 4, 1, 6];
// myArray.forEach(showName);

// console.log(myArray.filter(function (value:T){
//     return value % 2 === 0
// }));

// lambda function / lambda expressions / arrow expressions
// diferenta e ca nu mai ai keywordu function si ai sageata
// const x = () => {
//     console.log("ceva")
// }
// const y = (param1) => {}
// // echivalent cu
// const y = param1 => {}
//
// // daca sunt mai mult de 1 parametru atunci trebuie cu paranteze
//
// //ia uite la inca un exemplu care este foarte valid
// const y = param1 => param1*2

// ---------------------------------------

const dictionary = {
    one: 1,
    two: "2",
    "my-name": "Cala", //daca vrei proprietati cu cratima,
        // trebuie cu ghilimele
    3: "three"
}

console.log(dictionary["my-name"])
console.log(dictionary.one)
console.log(dictionary["3"])

for (const item of myArray){}
for (const key in dictionary){
    console.log(key, " - ", dictionary[key])
}

const myObject = {
    name: "aslfkha",
    id: "askjdha"
}


const mySet = new Set([1, 2, 4, 5, 6, 1, 23]);
console.log(mySet)