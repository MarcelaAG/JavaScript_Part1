//multiplying  two numbers together
function multiplyTwoNumbers(){
				var number1 = document.getElementById('input1').value;
				var number2 = document.getElementById('input2').value;
			    product = number1*number2;
			   		
					   if (isNaN (number1) || isNaN (number2)){
						alert( 'Veuillez rentrer un nombre !') ;
					}			   
					else {
						alert('Voici le résultat :' + product); 						
						
			}
		}