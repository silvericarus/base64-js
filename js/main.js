window.onload = start();
//"global" variables
var	output;
var	outputDecrypted;
var	padding = 0;


function	start()
{
	var	input;
	var	inputEncrypted;
	var	inputText;
	var	encryptBtn;
	var	decryptBtn;

	input = document.getElementById("noEncrypted");
	output = document.getElementById("encrypted");
	encryptBtn = document.getElementById("encryptBtn");
	encryptBtn.addEventListener("click", function(){
		inputText = input.value;
		input_to_binary(inputText);
	});
	inputEncrypted = document.getElementById("inputEncrypted");
	outputDecrypted = document.getElementById("outputDecrypted");
	decryptBtn = document.getElementById("decryptBtn");
	decryptBtn.addEventListener("click", function(){
		inputText = inputEncrypted.value;
		padding_remover(inputText);
	});
}

function padding_remover(input)
{
	while (input.search("=") != -1)
	{
		input = input.replace("=","");
	}
	convert_to_number(input);
}

function convert_to_number(input)
{
	var	numbers;
	numbers = input.split('').map(char => {
		const binary = Number(Object.keys(base64EncodingTable)
		.find(key => base64EncodingTable[key] === char)).toString(2);
		return binary;
	}).join('');
	split_to_8bits(numbers);
}

function split_to_8bits(input)
{
	var	bits = [];
	let	i;
	let	j;

	i = 0;
	j = 0;
	while (j < input.length)
	{
		bits[i] = input.slice(j, j + 8);
		i++;
		j += 8;
	}
	convert_to_ascii(bits);
}

function convert_to_ascii(input)
{
	var	string = "";
	string = input.map(elem => {
		return String.fromCharCode(parseInt(elem, 2));
	}).join('');
	console.log(string);
}

/*
The "preventDefault" function is an arrow function
that takes an event object as an argument and prevents
the default behavior of the event. It achieves this by
calling the "preventDefault" method on the event object,
effectively canceling any default actions associated with the event.
*/
function preventDefault()
{
	(e)=>e.preventDefault();
}