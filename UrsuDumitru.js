/*
    ...args -> nr variabil de parametri

	.find gasaeste primu element din array care corespunde
	.filter toti care corescpund
*/

function showMyName(name) {
    console.log(name);
}

//dictionare ne ajuta sa salvam valori prin key
// daca denumin o keye folosind "-" v-om folosi ""
// dictionarele nu au ordine
// Dictionary : 
const dictionary = {
    //key :
    one: 1,
    two: 2,
    "my-name": "Dima",
    3: "three"
}
// console.log(dictionary);
// console.log(dictionary.one);
// console.log(dictionary["my-name"]);
// console.log(dictionary["3"]);
// console.log(dictionary[3]);
// dictionary[3] = "alt string";
// console.log(dictionary[3]);
dictionary["cheie"] = showMyName;
// console.log(dictionary);
// console.log(dictionary.cheie);

// for(const key in dictionary) {
//     console.log(key," - ", dictionary[key]);
// }

//Object.values(dictionary).forEach(console.log);
// Object.keys(dictionary).forEach(console.log);


//   Seturi(in loc de Lista)
/* multime, nu contin valori duplicate
nu ne intereseaza ordinea obiectelor
*/

const mySet = new Set([1, 2, 3, 4, 5, 6, 6, 7, 6, 7, 1, 2]);
console.log(mySet);
console.log(mySet.size);
console.log(mySet.has(5));
//mySet.forEach(value => console.log(value));
mySet.add(19);
//console.log(mySet);
mySet.delete(5);
// entries -> lista de key-values
for (let entry of mySet) {
    console.log(entry);
}

mySet.clear();
console.log(mySet);
