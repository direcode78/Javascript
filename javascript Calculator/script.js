	
// Declaring globle var 
	var display = document.getElementById('display');
// End globle var

function clicked(number){
    var but = document.getElementById('but');
   // var display = document.getElementById('display');
    var butVal = number;
    display.value += butVal;
}

function operatorVal(value){
//var display = document.getElementById('display');
	    display.value += value;
}

function calculate(){
	//var display = document.getElementById('display');
	var evalu = eval(display.value);
	 if(display.value != '') {
		display.value = evalu; 
	}else {
		display.value = "";
	}
}

function clearDisplay(){
//var display = document.getElementById('display');
    display.value = '' ;

}
