// predefined parameters value
function showName(firstName, lastName = 'GDSC') {
    console.log(firstName + ' ' + lastName)
}
showName('Ba')

// many arguments function
function showNames(firstName, ...args) {
    console.log(firstName)
    console.log(args)
}
showNames('Bobo', 'Cioco', 12, 53.11, 'altceva')

// anonymous functions
const showMyName = function (firstName) {
    console.log(firstName)
}
showMyName('Yoyo')

// iterate each function with forEach
myArr = [1, 4, 6, 8, 2, 3]
myArr.forEach(function (value) {
    console.log(value)
})

// iterate throu' array; name function 'show' is not necessary
console.log()
console.log(myArr.filter(function show(value) {
    return value % 2 === 0
}))


// lambda function | lambda expressions | arrow expressions
const x = () => {
    console.log('ceva lambda')
}

// const y = (param1) => {}
// const y = param1 => {}  // <- works only with 1 parameter
// const y = (par1, par2) => {}
// const y = param1 => param1 * 2  <=>  const y = param1 => { return param1 * 2 }
console.log()
console.log(myArr.find(value => value % 2 === 0))
myArr.forEach((value, index) => {
    console.log(value + ' at index ' + index)
})
console.log()
console.log()


// DICTIONARIES
const dict = {
    one: 1,
    two: "2",
    "my-name": 'Yuo',
    3: [1, 2, 4, 5]
}

console.log(dict)
console.log(dict.one)
console.log(dict["my-name"])
console.log(dict["3"], dict[3])
// you can change value in a dictionary
dict[3] = 'alt string'
console.log(dict["3"], dict[3])

// you can add a key
dict["key"] = "valoare tatii"
console.log(dict)
console.log(dict.key)

// iteration of dict
for (const item of myArr){}
for (const key in dict) {
    console.log(key, ' - ', dict[key])
}
Object.values(dict).forEach(console.log)  // -> if you need only the values
console.log()
Object.keys(dict).forEach(console.log)  // -> if you need only the keys




