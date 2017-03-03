//This is the JS exercise for day one.

//Most of the exercises are completed (from top to Asynchronus

//TASK 1.

//Function 1:

//Function Declaration
//Observe: no return type, no type on parameters
function add(n1, n2){
   return n1 +n2;
};

//Function 2:

//Function Expression
var sub = function(n1,n2){
  return n1 - n2;
}; 


//Function 3:
//Callback example
var cb = function(n1,n2, callback){
    if (!(typeof n1 === "number" && typeof n2 === "number" && typeof callback === "function")){
        throw Error("Illigal argument!");
    }
    return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);

};

//TASK 2.
//partly Task 3.
try{
//Now we should run the following lines of code and understand the output.
console.log( add(1,2) );     // What will this print?
console.log( add );    // What will it print and what does add represent?
console.log( add(1,2,3) ) ; // What will it print
console.log( add(1) );	  // What will it print 	
console.log(cb(3,3,add) ); // What will it print
console.log(cb(4,3,sub) ); // What will it print
//console.log(cb(3,3,add())); // What will it print (and what was the problem)
console.log(cb(3,"hh",add));// What will it print
//console.log(cb(3,7+8));// What will it print

console.log(cb(3,3, add));
console.log(sub(5,2));

//Task 4.
console.log(cb(5,3, function(n1,n2){return n1*n2;}));
} catch(err) {
    console.log("Error " + err.message);
}

//Task 5.
console.log(cb(5,3, function(n1,n2){return n1/n2;}));

var names = ["hej", "hej2", "hej3", "grethe"];
//første kørsel
for(i = 0; i<names.length; i++){
    console.log(names[i]);
}
//anden kørsel.
names.forEach(function(name){
   console.log(name); 
});


var filtered = names.filter(function(name){
    return name[0]==="g";
});
console.log(filtered);

//The map function takes every element in the array, and pastes evert element into a new array. 
//Then we wrap the name, with line tags, and joins the names, and wrap this list of items
//in <ul> tags.
names = names.map(function(name){
   return "<li>"+name+"</li>"; 
});
var lis = "<ul>"+names.join("")+"</ul>";
console.log(lis);


//How to create objects:
var name2 = {
  firstname: "Christian",
  lastname: "Larsen"
};
name2.phone = "12345";

//Hvis man mangler en property,kan man bare tilføje den efterfølgende.
//I nameFactory har vi kun first name og lastname. 
function nameFactory(){
  return {firstname:"kurt", lastname:"mig"};  
};
var n = nameFactory();
//men her kan tilføjer vi et telefon nummer.
n.phone = "12345678";
console.log(n.firstname, n.lastname, n.phone);

console.log(name2.firstname, name2.lastname, name2.phone);

//Iterationer i objekter.
//her printer den elementerne ud i n men ikke resultaterne.
//Her kan man også se at n.phone, rent faktisk er tilføjet som en property.
for(prop in n){
    console.log(prop);
};

//her printer den elementerne ud OG resultatet.
for(prop in n){
    console.log(prop,n[prop]);
};


//GETTING COMFORTABLE WITH FILTER, MAP and FOREACH.

/*
 * 1) Declare a JavaScript array and initialize it with some names (Lars, Jan, Peter, Bo, Frederik etc.). 
 * Use the filter method to create a new array with only names of length <=3.
 * Use the forEach method to iterate and print (console.log) both the original and the new array.
 */ var newNames = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

var newArray = newNames.filter(function(names){return names.length <= 3;});

console.log(newArray);

//CALLBACKS Task 2
var toUpper = newNames.map(function(names){
    return names.toUpperCase();
});

console.log(toUpper);

console.log("\n");
//CallBacks Task3
var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
  ];

// Cars newer than 1999
console.log("Cars newer than 1999");
var newerThan99 = cars.filter(function(car){
    return car.year < 1999;
});
console.log(newerThan99);
console.log("\n");

console.log("Al  Volvo's");
//Al  Volvo's
var findVolvo = cars.filter(function(volvo){
    return volvo.make === 'Volvo';
});

console.log(findVolvo);
console.log("\n");

console.log("All cars with a price below 5000");
//All cars with a price below 5000
var cheapCar = cars.filter(function(cheap){
    return cheap.price < 5000;
});

console.log(cheapCar);
console.log("\n");

console.log("Can you refactor this into three methods, that takes the filter text as argument");
//All cars with a price below 5000
var cheapCar = cars.filter(function(cheap){
    return cheap.price < 5000;
});

console.log(cheapCar);
console.log("\n");

//CALLBACK 4
console.log("CALLBACK TASK 4");
var namesAsList = newNames.map(function(name){
   return "<li>"+name+"</li>"; 
});
var lis = "<ul>"+namesAsList.join("")+"</ul>";
console.log(lis);
console.log("This is what we wanted, because we now can use it as plain html.\n\
(not a part of this exercise, though)");

//Asynchronous Callbacks
var msgPrinter = function(msg,delay){
  setTimeout(function(){
    console.log(msg);
  },delay);
};

console.log("We expect the console.log() statements, without delay, to execute first,\n\
then the msgPrinter with 1000 delay, and then the msg printer with 2000 delay");
console.log("aaaaaaaaaa");
msgPrinter ("bbbbbbbbbb",2000);
console.log("dddddddddd");
msgPrinter ("eeeeeeeeee",1000);
console.log("ffffffffff");

