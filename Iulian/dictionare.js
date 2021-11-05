const dictionary ={
    one: 1,
    two: "2",
    "my-name": 'Iulian',
    3: "three",
}

console.log(dictionary["my-name"]);
console.log(dictionary[3]);
console.log(dictionary);

dictionary[3] = "alt string";

console.log(dictionary[3]);

dictionary["cheie"] = "valoare";
console.log(dictionary);
console.log(dictionary.cheie);
//iteratia unui dictionar
for(const key in dictionary){
    console.log(key+ "-" + dictionary[key]);
}
//the f
Object.values(dictionary).forEach(console.log);
console.log();
Object.keys(dictionary).forEach(console.log);