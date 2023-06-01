window.onload = start();
var	padding = 0;

function	start()
{
	var	input;
	var	output;
	var	inputText;
	var	encryptBtn;

	input = document.getElementById("noEncrypted");
	output = document.getElementById("encrypted");
	encryptBtn = document.getElementById("encryptBtn");
	encryptBtn.onClick = function(){
		inputText = input.value;
		// console.log(inputText);
	};
}

function    char_to_binary(char)
{
	return char.charCodeAt(0).toString(2);
}

function	input_to_binary(input)
{
	let	c;
	var	string;

	c = 0;
	string = "";
	string = input.split('').map(char => {
		return char_to_binary(char);
	}).join('');
	split_bits(string);
}

function split_bits(stream) {
	var	bits = [];
	let	i;
	let	j;

	i = 0;
	j = 0;

	while (j < stream.length)
	{
		bits[i] = stream.slice(j, j + 6);
		i++;
		j += 6;
	}
	convert_to_base64_chars(bits);
}

function convert_to_base64_chars(bits) 
{
	var base64Chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	var	string = "";

	string = bits.map(elem => {
		console.log(parseInt(elem, 2), String.fromCharCode(parseInt(elem, 2)));
		String.fromCharCode(parseInt(elem, 2))
	}).join('');
	return string;
}
