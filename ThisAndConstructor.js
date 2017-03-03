/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function Person(name){
  this.name = name; //This "this" is global, because it exists in the ConstructorFunction.
  console.log("Name: "+ this.name);
  
  setTimeout(function(){
    console.log("Hi  "+this.name);  //Explain this //ANSWER: This "this" is local
    },2000);                                      // in the "setTimeout" function.
}
//call it like this (do it, even if you know it’s silly ;-)
new Person("Kurt Wonnegut");  //This calls the function
console.log("I'm global: "+ name);  //Explain this //Answer: When the person object
//on line 15 is declared, the name variable is overwritten, when we reach the "i'm global + name"
//name is set to name in the construction of Kurt.
//To avoid the overwriting problem, we could do like this: 
//
       var p1 = new Person("Kurt Wonnegut");  
       console.log("I'm global: "+ p1.name);


//TO BE CONTINUED!
