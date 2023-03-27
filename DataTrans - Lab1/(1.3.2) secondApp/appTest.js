function test(){
 console.log(sum(0)==0?"Passed":"Failed");
 console.log(sum(2)==3?"Passed":"Failed");
 console.log(sum(4)==10?"Passed":"Failed");
 console.log(sum()=="n is undefined"?"Passed":"Failed");
 }
 //test ();
 
function test1(){
 console.log(sum(0)==0?"Passed":"Failed");
 console.log(sum(2)==3?"Passed":"Failed");
 console.log(sum(4)==10?"Passed":"Failed");
 console.log(sum()=="n is not a number"?"Passed":"Failed");
 
 };
 
 console.log("reapelare test");
 //test ();
 //test1();
 
 
 function testFibonacci(){
	 console.log("Testing getFibonacci");

	 console.log(getFibonacci(2)==[1, 1]?"Passed":"Failed");
	  console.log(getFibonacci(5)==[1, 1, 2, 3, 5]?"Passed":"Failed");
	   console.log(getFibonacci(11)=="not allowed"?"Passed":"Failed");
 console.log(getFibonacci()=="not allowed"?"Passed":"Failed"); 
 }
 testFibonacci();