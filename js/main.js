window.onload = start();
//"global" variables
var	output;
var	outputDecrypted;
var base64DecodingTable = {
	'A': 0,
	'B': 1,
	'C': 2,
	'D': 3,
	'E': 4,
	'F': 5,
	'G': 6,
	'H': 7,
	'I': 8,
	'J': 9,
	'K': 10,
	'L': 11,
	'M': 12,
	'N': 13,
	'O': 14,
	'P': 15,
	'Q': 16,
	'R': 17,
	'S': 18,
	'T': 19,
	'U': 20,
	'V': 21,
	'W': 22,
	'X': 23,
	'Y': 24,
	'Z': 25,
	'a': 26,
	'b': 27,
	'c': 28,
	'd': 29,
	'e': 30,
	'f': 31,
	'g': 32,
	'h': 33,
	'i': 34,
	'j': 35,
	'k': 36,
	'l': 37,
	'm': 38,
	'n': 39,
	'o': 40,
	'p': 41,
	'q': 42,
	'r': 43,
	's': 44,
	't': 45,
	'u': 46,
	'v': 47,
	'w': 48,
	'x': 49,
	'y': 50,
	'z': 51,
	'0': 52,
	'1': 53,
	'2': 54,
	'3': 55,
	'4': 56,
	'5': 57,
	'6': 58,
	'7': 59,
	'8': 60,
	'9': 61,
	'+': 62,
	'/': 63
  };


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
		convert_to_number(inputText);
	});
}

function convert_to_number(input)
{
	var	numbers;
	var padding;
	var paddingBits;

	padding = 0;
	paddingBits = 0;
	input.split('')
	.filter(char => char == "=").map(() => {
		padding++;
	});
	paddingBits = padding * 6;
	numbers = input.split('')
	.filter(char => char !== "=").map(char => {
		return base64DecodingTable[char].toString(2).padStart(6, '0');
	}).join('');
	// Calculate the number of extra zeros added
	var extraZeros = (8 - (numbers.length % 8)) % 8;
	// Add the extra zeros
	numbers = numbers.padEnd(numbers.length + extraZeros, '0');
  	numbers = numbers.slice(0, -paddingBits);
	split_to_8bits(numbers);
}

function split_to_8bits(input)
{
	var bytes = [];
 
	for (var i = 0; i < input.length; i += 8) {
		var byte = input.substr(i, 8);
		// console.log(parseInt(byte, 2));
		bytes.push(parseInt(byte, 2));
	}
	decrypt(bytes);
}

function decrypt(bytes)
{
	var	decrypted;

	decrypted =	bytes.map(byte => {
		return String.fromCharCode(byte);
	}).join('');
	console.log(decrypted);
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