
const weightElement = document.getElementById("weight");
const heightElement = document.getElementById("height");
const outputElement = document.getElementById("output");



function getBMI() {

    document.getElementById("weightError").innerHTML="";
    document.getElementById("weightError").style=""
    document.getElementById("heightError").innerHTML="";
    document.getElementById("heightError").style=""; 
    outputElement.innerHTML = output;
    var reg = /^\d+$/;
    var isValid= true;
    
    if(!reg.test(weightElement.value))
    {
        document.getElementById("weightError").innerHTML="Type a number"
        document.getElementById("weightError").style="color:Red;"         
        outputElement.innerHTML = output = "";
        isValid=false;
    }
    if(!reg.test(heightElement.value))
    {
        document.getElementById("heightError").innerHTML="Type a number";
        document.getElementById("heightError").style="color:Red;"  
        outputElement.innerHTML = output = "";
        isValid=false;
    }
    if(!isValid)
        return;
	let bmi = (weightElement.value / ((heightElement.value * heightElement.value) / 10000)).toFixed(2); //height in cm and weight in kg
	var output = '';
	if (bmi < 18.6)
		output = `You have under weight : <span>${bmi}</span>`;
	else if (bmi >= 18.6 && bmi < 24.9)
		output = `You have normal weight: <span>${bmi}</span>`;
	else output = `You have over weight : <span>${bmi}</span>`;
    outputElement.innerHTML = output;
    document.getElementById("weightError").innerHTML="";
    document.getElementById("weightError").innerHTML="";
};
