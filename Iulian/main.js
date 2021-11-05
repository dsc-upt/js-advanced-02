function showName(firstName, lastName = "GDSC"){
    console.log(firstName + ' ' + lastName);
}

showName('Iulian');

function showNames(firstName, ...args){
    console.log(firstName);
    for(let i=0;i<args.length; i++)
        console.log(args[i]);
}

//showNames("Iulian","dds",4,5,6);


//anonymous function
const showMyName = function (firstName){
    console.log(firstName);
}

myArr = [1, 3, 5 , 2, 4 , 1 ,6];

myArr.forEach(function (value) {
    console.log(value);
})
console.log();

console.log(myArr.filter(function (value) {
    return value % 2 === 0;
}));

const x = () => {
    console.log('ceva');
}

// const y = (p1) =>{}
//const y = p1 => p1*2;
//     const y = p1 => {
//     return p1*2;
//     }

//lambda functions / lambda expressions/ arrow expression
console.log();
console.log(myArr.find(value => value%2 === 0))

console.log(myArr.forEach( (value, index) => {
    console.log(value, index);
}))