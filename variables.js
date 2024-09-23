/*   
        (Var) - It is functionaaly scoped (can be accessed from anywhere)
             It can be redeclared within the same or different scope
             In this, we can reassign new values
             In this,the variable are initialised and moved to the top of the scope (hoisted) regardless of the position and prints "undefined" 
      
      ****** The use of var has been discontinued after ES6(EMCA Script 2015) because of the their functional scoping and hoisting problem    
*/

console.log(b);              // Output : undefined        (hoisting)
var b='bae';
var b='jovial';
b=36;
console.log(b);             // output : 36                (reassignment and redeclaration)
{
    var b='sympathy';
    console.log(b);        // Output : sympathy            (block scoped)
}
console.log(b);           // Output : sympathy             



/*   
    (let) - It is block scoped variable
            In this,we can reassign new values
            In this, the variable are not initialised until the code doesnot reaches where the variable has declared and give ReferenceError when accessed before its declaration
            In this, we cannot redeclare the variable within the same scope
     
    ****  This keyword has introduced in ES6 (EMCA Script 2015)
*/

// console.log(a);     Reference Error, because variable a does not exist yet     (no hoisting)

let a=10;
a='hello';
console.log(a);        // Output : hello                                          (reassignment)

//    let a=20;        it will throw an error                                     (no redeclarration)
var a='jello';
{
    let a=30;
    console.log(a);    // Output : 30
}

console.log(a);        // Output : hello                                           (block spaced)



/*
    (const)    -  It is block scoped
                  In this we cannot reassign new value and must have the value when it is declared otherwise it will throw an error
                  It cannot be reassigned within the same scope
                  In this, the variable are not initialised before until the code reaches its declaration
                  If the variable is initialised with const keyword cannot redeclared with another type of keywords within the same or different scope
                  In this, only the reference of the variable is constant not the object

*/

//   console.log(c);         ReferenceError, variable c does not exist yet (no hoisting)

const c=10;

//   c=20;                   it will throw an error   (no reassignment)

console.log(c);              // Output : 10

//   const c=40;             // No redeclaration

{
    const c=30;
    console.log(c);         // Output : 30

//   var c=40;              Error                 (differnt keyword)

}

console.log(c);             // Output : 10        (block scoped)

const d={ value : 20 }
console.log(d);             // Output : 20
d.value = 10;
console.log(d)              // Output : 10        Object properties can be changed

//   d= { value : 30};      Error                 Cannot be reassignment
  
