document.getElementById("n").addEventListener('input',inputSum );

 function inputSum(){
	var inputNumber = parseInt(document.getElementById("n").value );
	console.log(sum( inputNumber ) );
}

 function sum(n){
	if (typeof n === 'undefined') return "n is undefined ";
	else if(isNaN(n)) return "n is not a number";
	var sum = 0;
	for(var i=1;i<=n;i++){
		sum+=i;
	}
	return sum;
 }
 
 function getFibonacci(n){
	 if (typeof n === 'undefined') return "not allowed";
	else if(isNaN(n) || n<1 || n>10) return "not allowed";
	if(n==2){
		return [1, 1];
	}else{
		 var sequence =[];
		 var a,b,aux;
		 a=0; b=1;
		 while(b<n){
			 sequence.push(b);
			 aux=b;
			 b=a+b;
			 a=aux;
		 }
		  if(b==n){
		  sequence.push(b);
		  }
		  
 console.log(sequence);
		  return sequence;
	}
 }