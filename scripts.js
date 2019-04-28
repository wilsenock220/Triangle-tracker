function result(){

var side1=parseInt(document.getElementById('side1').value);
var side2=parseInt(document.getElementById('side2').value);
var side3=parseInt(document.getElementById('side3').value);

var answer=document.getElementById('answer');

if(side1+side2 > side3 && side2+side3 > side1 && side1+side3 > side2) {
  if (side1 == side2 && side1 == side3) {
    console.log("This is an equilateral triangle!");
  };

  else if(side1 === side2 || side2 === side3 || side1 === side3){
    console.log("This is an isosceles triangle!");
  };

  else if(side1 !== side2 && side2 !== side3 && side3 !== side1){
    console.log("This is a scalene triangle!");
  };
};

 else {
  console,log("Not a triangle!");
};
