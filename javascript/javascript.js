//function validation(){ 
//  if (document.number-entry.number.value == "") {  
//    document.getElementById('form-error').innerHTML="Please enter a number";
//    return false;
//     //displaying a message if the form is empty
//  }
//}
 
var form = document.getElementById('number-entry');
var submit = document.getElementById('submit');
var reset = document.getElementById('reset');


//var num = document.getElementById("number-entry").value;  //create variable for number entered into form


var numList = [];  //create numList object to store results


console.log(form); //trying to check on form enty
console.log(submit); //ditto


//fake list of numbers because I can't get the form data entry to work after struggling for hours/days
numList = [3, 78, 99, 107, 4369, 3, 2, 900, 1203, 77];

//creating a list with spaces for display. source: http://stackoverflow.com/questions/13939573/how-to-add-spaces-between-array-items-javascript
var numListAsString = numList.join(', ');

//display the array
document.getElementById("list").innerHTML = "The numbers you have entered are " + numListAsString + ".";

//calculate length
var arrayLength = numList.length;

//display length
document.getElementById("length").innerHTML = "You have entered " + arrayLength + " numbers";



//source for average calc: http://javascriptexample.net/extobjects81.php
Math.average = function(){
 var cnt, tot, i;
 cnt = arguments.length;
 tot = i = 0;
 while (i < cnt) tot+= arguments[i++];
 return tot / cnt;
 }

//calculate averae
var avg = Math.average.apply(Math, numList);

//calculate sum
var sum = avg * arrayLength;

//display sum
document.getElementById("sum").innerHTML = "The sum of the numbers is " + sum;

//display average
document.getElementById("average").innerHTML = "The average of the numbers is " + avg;


//caluculate median. initial source: http://stackoverflow.com/questions/11955728/how-to-calculate-the-median-of-an-array

var median;
var sortedArray = numList.sort();


//need non unicode sort method.: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
numList.sort(function(a, b) {
  return a - b;
});

if (arrayLength % 2 == 0) //testing for even number of items
   median = ((sortedArray[Math.round(arrayLength/2)-1] + sortedArray[Math.round(arrayLength/2)])/2);
   else //odd number of items
   median = sortedArray[Math.round(arrayLength/2)-1];


document.getElementById("median").innerHTML = "The median value of the numbers is " + median;

//standard deviation calculation - RAN OUT OF TIME
//get the average value of the data set
//calculate the difference between each value in the set and the average
//then square the result of each difference
//average the squared differences
//get the square root of the average squared difference











