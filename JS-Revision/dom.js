console.log("DOM Manipulation Example");

//globalelement
console.log(window)

//get element by id
console.log(document.getElementById("headingId").tagName);


//innerhtml
document.getElementById("headingId").innerHTML="<p style='color:red'>HI my name is Rishi</p>";

//get element by class name
//return the elments by class name and can be updated using index
console.log(document.getElementsByClassName("paragraph"));
document.getElementsByClassName("paragraph")[0].innerHTML="This is modified 1st paragraph";
document.getElementsByClassName("paragraph")[1].innerHTML="This is modified 2nd paragraph";
document.getElementsByClassName("paragraph")[2].innerHTML="This is modified 3rd paragraph";

//get element by tag name
//return the elments by tage name and can be updated using index
console.log(document.getElementsByTagName("h2"));
document.getElementsByTagName("h2")[0].innerHTML="This is modified 1st h2 tag";
document.getElementsByTagName("h2")[1].innerHTML="This is modified 2nd h2 tag";
document.getElementsByTagName("p")[4].innerHTML="This is modified 4th p tag";

//query selector
//selects only first matching element
console.log("This is a query selector for paragraph: "+document.querySelector(".paragraph"));
document.querySelector(".paragraph").innerHTML="This paragraph is modified using query selector";

//query selector all
//selects all matching element
console.log("this is a query selector all for h2 tags "+document.querySelectorAll("h2"));   
document.querySelectorAll("h2").forEach((element) => {
    element.innerHTML=`This is modified h2 tag number  using query selector all`;
}
);