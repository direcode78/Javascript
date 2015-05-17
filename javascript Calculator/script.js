
// Declaring globle var
	var display = document.getElementById('display');
// End globle var

function clicked(number){
    var but = document.getElementById('but');
    var butVal = number;
    display.value += butVal;
}

function operatorVal(value){
  var operatorCheck = display.value.charAt(display.value.length-1);
	    if(operatorCheck == "+" || operatorCheck == "-" || operatorCheck == "*" || operatorCheck == "/" ){
				display.value += "";
			}else{
	    display.value += value;
		}
}

function calculate(){
	var evalu = eval(display.value);
	 if(display.value != '') {
		display.value = evalu;
	}else {
		display.value = "";
	}
}

function clearDisplay(){
    display.value = '' ;

}
