function showname(firstName, lastName = 'Augustinov') {
    console.log(firstName + ' ' + lastName);
}

showname('Thomas');

// --> args numar variabil de argumente
function shownames(firstName, ...args) {
    console.log(firstName);
    console.log(args);
}

shownames('Thomas', 4,6,4,'adsfg');

const showMyName = function (firstName) {
    console.log(firstName);
}

showMyName("Thomas");

myarr = [1, 5, 3, 4, 5, 2];

myarr.forEach(showMyName);
console.log();

myarr.forEach(function show(value) {
    console.log(value);
});
console.log();

console.log(myarr.filter(function (value) {
    return value % 2 === 0;
}))
console.log();

// lambda function/lambda expression/arrow expression
//const x = () => {console.log('Hello');}
//const x1 = (param1, param2) => {}
//const x1 = param1 => {return param1 * 2;}

console.log(myarr.find(value => value % 2 === 0));
console.log();

console.log(myarr.forEach((value, index) => {
    console.log(value, index);
}));

