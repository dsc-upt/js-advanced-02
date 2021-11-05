const mySet = new Set([1,2,3,5,6,7,6,6,4]);
console.log(mySet);
console.log(mySet.size);

mySet.forEach(value => console.log(value));

mySet.add(19);
console.log(mySet);

mySet.delete(6);
console.log(mySet);
//mySet.clear();
//console.log(mySet);

for (let entry of mySet.entries()) {
    console.log(entry);
}
