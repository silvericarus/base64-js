window.onload = start();
var	output;
var	padding = 0;
var base64EncodingTable = {
	0: 'A',
	16: 'Q',
	32: 'g',
	48: 'w',
	1: 'B',
	17: 'R',
	33: 'h',
	49: 'x',
	2: 'C',
	18: 'S',
	34: 'i',
	50: 'y',
	3: 'D',
	19: 'T',
	35: 'j',
	51: 'z',
	4: 'E',
	20: 'U',
	36: 'k',
	52: '0',
	5: 'F',
	21: 'V',
	37: 'l',
	53: '1',
	6: 'G',
	22: 'W',
	38: 'm',
	54: '2',
	7: 'H',
	23: 'X',
	39: 'n',
	55: '3',
	8: 'I',
	24: 'Y',
	40: 'o',
	56: '4',
	9: 'J',
	25: 'Z',
	41: 'p',
	57: '5',
	10: 'K',
	26: 'a',
	42: 'q',
	58: '6',
	11: 'L',
	27: 'b',
	43: 'r',
	59: '7',
	12: 'M',
	28: 'c',
	44: 's',
	60: '8',
	13: 'N',
	29: 'd',
	45: 't',
	61: '9',
	14: 'O',
	30: 'e',
	46: 'u',
	62: '+',
	15: 'P',
	31: 'f',
	47: 'v',
	63: '/',
  };  

function	start()
{
	var	input;
	var	inputText;
	var	encryptBtn;

	input = document.getElementById("noEncrypted");
	output = document.getElementById("encrypted");
	encryptBtn = document.getElementById("encryptBtn");
	encryptBtn.addEventListener("click", function(){
		inputText = input.value;
		input_to_binary(inputText);
	});
}

function    char_to_binary(char)
{
	return char.charCodeAt(0).toString(2);
}

function	input_to_binary(input)
{
	var	string;

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
	let	padding_res;

	i = 0;
	j = 0;

	while (j < stream.length)
	{
		bits[i] = stream.slice(j, j + 6);
		i++;
		j += 6;
	}
	if (stream.length % 3 != 0)
	{
		padding_res = 6 - bits[bits.length - 1].length;
		if (padding_res == 1)
			padding = 1;
		else if (padding_res == 2)
			padding = 2;
	}
	convert_to_base64_chars(bits);
}

function convert_to_base64_chars(bits) 
{
	var	string = "";

	string = bits.map(elem => {
		return base64EncodingTable[parseInt(elem, 2)];
	}).join('');
	while (padding > 0)
	{
		string += "=";
		padding--;
	}
	output.value = string;
}

function preventDefault()
{
	(e)=>e.preventDefault();
}