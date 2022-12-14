let grade = prompt('input grade');

switch(grade){

 case 'A':
  alert('Exellent')
  console.log('Exellent'); 
break;
case 'B':
 alert('Good')
  console.log('Good'); 
  break;
 case 'C':
 alert('average')
  console.log('Average');  
break;
case 'D':
 alert('poor')
  console.log('Poor');
  break;
case 'E':
 alert('Fail')
  console.log('Fail');
  break;
default:
 alert( 'Please input a letter grade between A and E')
  console.log(grade,'is not a letter grade'); 
 }