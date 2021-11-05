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
