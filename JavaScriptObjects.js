

var Person = {firstName: "Christian", 
              lastName: "Jacobsen",
              hobby: "Alt", 
              email: "hej@hej.com"};

for(prop in Person){
    console.log(prop, Person[prop]);
    
}

var Person2 = function(firstName, lastname, age){
    this.firstName = firstName;
    this.lastName = lastname;
    this.age = age;
};