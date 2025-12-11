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
    const age = callback(year);
    console.log(`You are ${age} years old.`);
}

calculateAge(2003, function(yearOfBirth) {
    return 2025 - yearOfBirth;
});