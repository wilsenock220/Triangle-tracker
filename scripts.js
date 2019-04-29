var side1=parseInt(document.getElementById('side1').value);
var side2=parseInt(document.getElementById('side2').value);
var side3=parseInt(document.getElementById('side3').value);

function triangle(){

var answer=document.getElementById('answer');
if(side1+side2 > side3 && side2+side3 > side1 && side1+side3 > side2) {
  if (side1==side2&&side1==side3) {
    answer.innerHTML='Equilateral: All sides are equal!';
  }
  else if(side1===side2||side2===side3||side1===side3){
    answer.textContent='Isosceles: Two sides are equal!'
  }
  else{
    answer.textContent="Scalene: No sides are equal!";
  }
}
 else {
  answer.textContent="Not a triangle!";
}
}
function reset(){
  var side1=parseInt(document.getElementById('side1').value);
  var side2=parseInt(document.getElementById('side2').value);
  var side3=parseInt(document.getElementById('side3').value);
  var answer=document.getElementById('answer');
}
