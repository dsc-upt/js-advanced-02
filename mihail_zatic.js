function showName(firstName, lastName = 'GDSC') {
    console.log(firstName + ' ' + lastName)
}

showName('Dan');

// ...args -> număr variabil de argumente
function showNames(firstName, ...args) {
    console.log(firstName)
    console.log(args)
}

showNames('Dan', 'dds', 4, 5, 6, 7, 'asdsadsadsa')

// anonymous function
const showMyName = function (firstName) {
    console.log(firstName)
}

showMyName('Dan')

myArr = [1, 3, 5, 2, 4, 1, 6]
myArr.forEach(function show(value) {
    console.log(value)
})

console.log()

console.log(myArr.filter(function (value) {
    return value % 2 === 0
}));


// lambda function / lambda expressions / arrow expression
//           = >
const x = () => {
    console.log('ceva')
}

// const y = (param1) => {}
// const y = (param1, param2) => {}
// const y = param1 => {}
// const y = param1 => {
//     return param1 * 2
// }
// const y = param1 => param1 * 2
console.log()
console.log(myArr.find(value => value % 2 === 0))
myArr.forEach((value, index) => {
    console.log(value, index)
});

const dictionary = {
    "ceva cheie mai lunga" : "ceva valoare mai lunga",
    one: 1,
    two: 2,
    "cheie" : 'valoare',
    "my-name": 'Mihai',
    3: [1, 5, 3, 6, 8]
}

console.log(dictionary)
console.log(dictionary.one)
console.log(dictionary["my-name"])
console.log(dictionary["3"])
console.log(dictionary[3])
dictionary[3] = "alt string"
console.log(dictionary[3])
dictionary["cheie"] = showMyName;
console.log(dictionary)
dictionary.cheie()

for (const item of myArr){}
for (const key in dictionary){
    console.log(key, dictionary[key])
}

// Object.values(dictionary).forEach(console.log)
// Object.keys(dictionary).forEach(console.log)

const myObj = {
    name: "reraeirae",
    id: "aeifiea"
}

const mySet = new Set([1, 2, 3, 4, 5, 6, 6, 7, 6]);
console.log(mySet)
console.log(mySet.size)
console.log(mySet.has(5))
mySet.forEach(value => console.log(value))
mySet.add(19)
console.log(mySet)
mySet.delete(5)
console.log(mySet)
for (let entry of mySet.entries()){
    console.log(entry)
}
mySet.clear()
console.log(mySet)