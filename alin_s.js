function showName(firstname, lastname = 'Socolov'){
    console.log(firstname + ' ' +lastname);
}

// ...args -> numar variabil de argumente
function showNames(firstname, ...args){
    console.log(firstname);
    console.log(args);
}


const showMyName = function (firstName) {
    console.log(firstName);
}

myArr = [1,4,2,4,1,3,32]

const dictionary = {
    one: 1,
    two: "2",
    "my-name": 'Alin',
    3: "three"
}

console.log(dictionary.one)
console.log(dictionary["my-name"])
console.log(dictionary["3"])
console.log(dictionary[3])
dictionary[3] = "alt string"
console.log(dictionary[3])
dictionary["cheie"] = "valoare"


for( const key in dictionary){
    console.log(key, dictionary[key])
}


const mySet = new Set([1,2,3,4,5,6,7,7,6]);
console.log(mySet)