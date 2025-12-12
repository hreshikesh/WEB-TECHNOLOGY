// var let and const

//1.var
//function scoped
//re-declarable
//can be updated
//outdated way of declaring variable
var a=10;
console.log("Initial value of a using var: "+a);
var a=20;
console.log("Re-declared value of a using var: "+a);
a=30;
console.log("Updated value of a using var: "+a);

function vartest(){
    var age=25;
    console.log("Value of age inside function using var: "+age);
    if(true){
        var age=30;}
    console.log("Value of age outside function using var: "+age);
}
vartest();


//2. let
//block scoped
//not re-declarable
//can be updated
let b=10;
console.log("Initial value of b using let: "+b);
//let b=20; //cannot declare b again
b=30;
console.log("Updated value of b using let: "+b);

//3. const
//block scoped
//not re-declarable
//cannot be updated
const c=10;
console.log("Initial value of c using const: "+c);
//const c=20; //cannot declare c again
//c=30; //cannot update c

//data types in js


//1. primitive data types
//1.number
let price=30;
console.log("number datatype "+price);
//2.string
let name="Rishi"
console.log("string datatype "+name);
//3.boolean
let isTrue=true;
console.log("boolean datatype "+isTrue);
//4.undefined
let address;
console.log("undefined datatype "+address);
//5.null
let lastName=null;
console.log("null datatype "+lastName);
//6.symbol
let sym=Symbol("my_Symbol");
console.log("symbol datatype "+sym.toString());
//7.bigint
let phoneNumber=787458415415n;
console.log("bigint datatype "+phoneNumber);

//2. non-primitive data types
//1.object

const user_details={
    name:"Rishi",
    age:25,
    isAdmin:true
};
console.log("object datatype "+user_details);
console.log("Accessing object properties: Name-"+user_details.name+", Age-"+user_details.age+", isAdmin-"+user_details.isAdmin);

//2.array
//in js array can hold multiple data types
const colors=["red","green","blue",10,true];
console.log("array datatype "+colors);
console.log("Accessing array elements: 1st-"+colors[0]+", 2nd-"+colors[1]+", 3rd-"+colors[2]+", 4th-"+colors[3]+", 5th-"+colors[4]);

//3.function
function greetUser(userName){
    return "Hello, "+userName+"!";
}
console.log(greetUser("Rishi"));
