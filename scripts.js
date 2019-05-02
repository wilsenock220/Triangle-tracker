function result(){
var length1=parseInt(document.getElementById('length1').value);
var length2=parseInt(document.getElementById('length2').value);
var length3=parseInt(document.getElementById('length3').value);
var answer=document.getElementById('answer');
if(length1+length2 > length3 && length2+length3 > length1 && length1+length3 > length2) {

  if (length1 === length2 && length1 === length3) {
    answer.textContent='This is an Equilateral triangle!';
  }
  else if(length1 === length2 || length2 === length3 || length1 === length3){
    answer.textContent='This is an isosceles triangle!'
  }
  else{
    answer.textContent="This is a scalene triangle!";
  
  }
}
 else {
  answer.textContent="This is not a triangle!";
}
}
function reset(){
  var side1=parseInt(document.getElementById('side1').value);
  var side2=parseInt(document.getElementById('side2').value);
  var side3=parseInt(document.getElementById('side3').value);
  var answer=document.getElementById('answer');
}
