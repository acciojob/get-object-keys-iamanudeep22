//your JS code here. If required.
let student = {
	name : "Anudeep"
}

let arr = [];

function getKeys(obj){
	for(key in obj){
        arr.push(key);
    }
    return arr;
}

console.log(getKeys(student));