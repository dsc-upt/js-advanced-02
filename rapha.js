function showName(firstname,lastname)
{
    console.log(firstname+ " " + lastname);
}

showName("raphael","augustinov");

const dic = {
    one:1,
    two:2,
    3:"trei"
}
console.log(dic.one)
console.log(dic.two)
console.log(dic[3])

const mySet = new Set([1,2,4,8,3,4,6,4]);
console.log(mySet)
mySet.forEach(value => console.log(value));
mySet.add(13);
mySet.delete(4);
console.log(mySet);
mySet.clear();
console.log(mySet);