//  a) Create the two arrays below, spelled exactly as they are given. This will form the start for all the following questions.
console.log("a)");
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];
console.log("boys array:", boys);
console.log("girls array:", girls);
//  b) Create a new array called all, which should be a concatenation of the two
//  arrays given above, starting with the boys and ending with the girls.
var all = boys.concat(girls);
console.log("b) all array:", all);

//c1) Create a comma separated string containing all the names from the all-array, separated by commas.
var c1 = all.join(',');
console.log("c1:", c1);

//c2) Create a hyphen (-) separated string containing all the names from the all-array, separated by hyphens.
var c2 = all.join('-');
console.log("c1:", c2);

//d)  Add the names Lone and Gitte to the end of the array
all.push("Lone", "Gitte");
console.log("d) output: ",all);

//e)  Add the names Hans and Kurt to the start of the array
all.unshift("Hans", "Kurt");
console.log("e) output: ",all);

//f)  Remove the first name in the array (Hans)
var left1 = all.shift();
console.log("f) output: ",all);
console.log("Who has left?: ",left1);

//g)  Remove the last name from the array (Gitte)
var left2 = all.pop();
console.log("g) output: ",all);
console.log("Who has left?: ",left2);

//h) Remove Ole and Janne from the middle of the array
var left3 = all.splice(3,2);
console.log("h) output: ",all);
console.log("who left?", left3);

//i) Sanne thinks it's unfair that the boys have to come first, reverse the all array, so that the girls come first.
all.reverse();
console.log("i) output: ",all);

//j) Peter thinks that this is just as unfair and suggests that the array should be sorted. Sort the array.
console.log(all.sort());
//k) The default sort algorithm doesn’t handle the situation where name 
//can be either capitalized or not. Write a user-defined sort method to 
//fix this problem.
var newArray = all.map(function(x){return x.toUpperCase();});
newArray.sort();
console.log("Problem solved: ",newArray.sort());
//l) Convert all the names in the array to uppercase .
console.log(newArray);

