

var resultText =$('#result').val();
var result =parseInt(resultText);

 function printsign( value){
document.getElementById("sign").innerHTML =value;
 }

	document.getElementById("inc").addEventListener("click",add);
	document.getElementById("dec").addEventListener("click",substract);
	document.getElementById("div").addEventListener("click",divide);
	document.getElementById("mul").addEventListener("click",multiply);
	document.getElementById("equals").addEventListener("click",equals);
	
function add(){
	var firstNumberText = $('#firstNumber').val();
var firstNumber = parseInt(firstNumberText);

var secondNumberText = $('#secondNumber').val();
var secondNumber = parseInt(secondNumberText);
	result=firstNumber + secondNumber;
	console.log(result);
	printsign("+");
}
function substract(){
	var firstNumberText = $('#firstNumber').val();
var firstNumber = parseInt(firstNumberText);

var secondNumberText = $('#secondNumber').val();
var secondNumber = parseInt(secondNumberText);
	result=firstNumber - secondNumber;
	printsign("-");
}

function divide(){
	var firstNumberText = $('#firstNumber').val();
var firstNumber = parseInt(firstNumberText);

var secondNumberText = $('#secondNumber').val();
var secondNumber = parseInt(secondNumberText);
	result=firstNumber / secondNumber;
	printsign("/");
}
function multiply(){
	var firstNumberText = $('#firstNumber').val();
var firstNumber = parseInt(firstNumberText);

var secondNumberText = $('#secondNumber').val();
var secondNumber = parseInt(secondNumberText);
	result=firstNumber * secondNumber;
	printsign("*");
}

function equals(){
	result = result
	document.getElementById("result").innerHTML=result;
}

	