

var side1 = parseInt(prompt("Enter the first length:"));{
var side2 = parseInt(prompt("Enter the second length:"));{
var side3 = parseInt(prompt("Enter the third length:"));{
if (side1===side2 && side2===side3) {
    console.log("This is an equilateral triangle! All the sides are equal.");
  }
  else if(side1 !== side2 && side2 !== side3 && side1 !== side3) {
    console.log("This is a scalene triangle!");
  };
   else if (side1 === side2 && side2 !== side3 || side2 === side3 && side3 !== side1 || side1 === side3 && side1 !== side2) {
    console.log("This is an isosceles triangle!");
  };
   else if (temperature < 25) {
    console.log("Have a nice day :)");
  }
   else {
    console.log("Keep cool today!");
  }
}
}
}
