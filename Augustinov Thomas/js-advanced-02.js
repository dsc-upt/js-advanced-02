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

myArr = [1, 5, 3, 4, 5, 2];

myArr.forEach(showMyName);
console.log();

myArr.forEach(function show(value) {
    console.log(value);
});
console.log();

console.log(myArr.filter(function (value) {
    return value % 2 === 0;
}))
console.log();

// lambda function/lambda expression/arrow expression
//const x = () => {console.log('Hello');}
//const x1 = (param1, param2) => {}
//const x1 = param1 => {return param1 * 2;}

console.log(myArr.find(value => value % 2 === 0));
console.log();

console.log(myArr.forEach((value, index) => {
    console.log(value, index);
}));

const dictionary = {
    "ceva cheie mai lunga": "ceva valoare mai lunga",
    one: 1,
    two: "2",
    "my-name": "Thomas",
    3: [1, 2, 3, 4]
}
console.log(dictionary)
console.log(dictionary.one)
console.log(dictionary["my-name"])
console.log(dictionary["3"])
console.log(dictionary[3])
dictionary["cheie"] = showMyName;
console.log(dictionary)
dictionary.cheie("Thomas")

for(const item of myArr){}
for(const key in dictionary){
    console.log(key, " - ", dictionary[key])
}

const myObj = {
    name: 'dadasd',
    id: "basfasd"
}

//Object.values(dictionary).forEach(console.log)
//Object.keys(dictionary).forEach(console.log)
