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

/*
The "char_to_binary" function takes a character as input 
and converts it into its binary representation. It accomplishes
this by utilizing the "charCodeAt" method, which retrieves the
Unicode value of the character. The obtained Unicode value is
then converted to a binary string using the "toString" method
with a base of 2. The resulting binary string is returned as the
output of the function, representing the binary representation of
the input character. The "padStart" function ensures that the
binary string is left-padded with zeros up to a length of 8 characters.
*/
function    char_to_binary(char)
{
	return char.codePointAt().toString(2).padStart(8, '0');
}


/*
The "input_to_binary" function converts a given input string into 
its binary representation. Within the function, a variable called 
"string" is declared and initialized as an empty string.
The input string is then split into an array of individual
characters using the "split('')" method. The "map" function
is applied to each character of the input array, calling
the "char_to_binary" function on each character to convert it
into its binary representation. The resulting array of binary strings
is then joined together using the "join('')" method, forming a single
binary string representation of the input. Finally, the "split_bits"
function is called.
*/
function	input_to_binary(input)
{
	var	string;

	string = "";
	string = input.split('').map(char => {
		return char_to_binary(char);
	}).join('');
	console.log(string);
	split_bits(string);
}

/*
The "split_bits" function divides a binary string into groups of
six bits. It iterates through the input string, extracting slices
of six bits at a time and storing them in an array called "bits".
If the input length is not divisible by 3, padding is determined
based on the remaining bits. The function then likely passes the
"bits" array for further processing, possibly involving base64 conversion.
*/
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
		else if (padding_res % 2 == 0)
			padding = 2;
	}
	convert_to_base64_chars(bits);
}

/*
The "convert_to_base64_chars" function converts an array of binary
strings to base64-encoded characters. It maps each binary string to
its corresponding base64 character using a lookup table and joins them
together to form a string. Padding is handled by appending "="
characters based on a separate padding variable. The resulting
base64-encoded string is assigned to an "output.value" property, likely
updating the displayed value.
*/
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
