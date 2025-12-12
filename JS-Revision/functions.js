// named function

function greet(){
    console.log("Hello, World!");
}

greet();

// anonymous function
const addnumbers=function(a,b){
    return a + b;
}
console.log(addnumbers(5, 10));

// arrow function
const displayAge=(age) => {
    console.log(`You are ${age} years old.`);
}
displayAge(25);

//callback function
function calculateAge(year, callback) {
setTimeout(() => {
    
      const age = callback(year);
    console.log(`You are ${age} years old.`);
}, 5000);
    
    console.log("This message is displayed immediately.");
  
}

calculateAge(2003, function(yearOfBirth) {
    return 2025 - yearOfBirth;
});


setTimeout(()=>{
    console.log("This message is displayed after 10 seconds.");
},10000)