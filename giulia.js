function showname(firstName, lastName = 'Mandres') {
    console.log(firstName + ' ' + lastName);
}

showname('Giulia');

// --> args numar variabil de argumente
function shownames(firstName, ...args) {
    console.log(firstName);
    console.log(args);
}

shownames('Giulia', 4,6,4,'adsfg');

const showMyName = function (firstName) {
    console.log(firstName);
}

showMyName("Giulia");

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

myarr.forEach((value, index) => {
    console.log(value, index)
})
console.log();

const dictionary = {
    one : 1,
    two : "2",
    "my-name" : "Giulia",
    3 : [1, 3, 5]
}
console.log(dictionary.one);
console.log(dictionary.two);
console.log(dictionary["my-name"]);
console.log(dictionary["3"]); // sau [3]
console.log();
console.log(dictionary);

dictionary[3] = "alt string";
console.log(dictionary[3]);
dictionary["my-name"] = "ceva";
console.log(dictionary["my-name"]);

for (const key in dictionary) {
    console.log(key, dictionary[key])
}

Object.values(dictionary).forEach(console.log);
console.log();
Object.keys(dictionary).forEach(console.log);



