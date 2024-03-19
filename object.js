const object ={
    name:"kishan",
    roll: 1
}
const string = JSON.stringify(object)
console.log(string);
const obj = JSON.parse(string);
console.log(obj)