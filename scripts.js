var side1=parseInt(document.getElementById('side1').value);
var side2=parseInt(document.getElementById('side2').value);
var side3=parseInt(document.getElementById('side3').value);

function triangle(){

if(side1+side2 <= side3 && side2 + side3 <= side1 && side1 + side3 <= side2) {
   document.getElementById('answer').innerHTML = "Not a triangle";
 }
  else if (side1 === side2 && side1 === side3 && side2 === side3) {
    document.getElementById('answer').innerHTML = "Equilateral";
  }
  else if(side1===side2 || side2===side3 ||side1===side3){
    document.getElementById('answer').innerHTML = "Isosceles";
  }
  else{
    document.getElementById('answer').innerHTML = "scalene";
  }
}

function reset(){
  var side1=parseInt(document.getElementById('side1').value);
/ var side2=parseInt(document.getElementById('side2').value);
  var side3=parseInt(document.getElementById('side3').value);
  var answer=document.getElementById('answer');
}
