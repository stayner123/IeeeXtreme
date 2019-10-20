function main() {
    // write your code here.
    // call functions `nextString`, `nextFloat` and `nextInt` 
    // to read the next token of input (ignoring whitespace)
    // Alternatively, you can create your own input parser functions
    // use console.log() to write to stdout
    
    let T = nextInt();
    
    while (T > 0) {
        let B = nextInt();// 2
        let X = nextInt();// 2
        
        const alfabeto = "abcdefghijklmnopqrstuvwxyz";
        const substr = alfabeto.substr(0, B); // ab
        let aux = X; // 2
        let pot = 1;
        let counter = 1;
        
        while(aux - pot*B*counter >= 0) { // nn
           pot = pot*B*counter; // 4
           aux = aux - pot; // 16
           counter++; // 2
        }
        // aux = 2
        let aux2 = aux > B ? aux - 1 : aux; // aux2 = 2
        let conj = Math.floor(aux / counter); // 2
        
        let str = "";
        let resto = conj; // 2
        do{
            counter -= 1; // 0
            str += substr.charAt(resto / Math.pow(B, counter)); // 0
            resto = resto % Math.pow(B, counter); // 0
        }while(resto !== 0);
        
        console.log(str.charAt(aux % str.length));
        
        T--;
    }
}

// default parsers for JS.
function nextInt() {
    return parseInt(nextString());
}

function nextFloat() {
    return parseFloat(nextString());
}

function nextString() {
    var next_string = "";
    clearWhitespaces();
    while (input_cursor < input_stdin.length && !isWhitespace(input_stdin[input_cursor])) {
        next_string += input_stdin[input_cursor];
        input_cursor += 1;
    }
    return next_string;
}

function nextChar() {
    clearWhitespaces();
    if (input_cursor < input_stdin.length) {
        return input_stdin[input_cursor++];
    } else {
        return '\0';
    }
}

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_cursor = 0;
process.stdin.on('data', function (data) { input_stdin += data; });
process.stdin.on('end', function () { main(); });

function isWhitespace(character) {
    return ' \t\n\r\v'.indexOf(character) > -1;
}

function clearWhitespaces() {
    while (input_cursor < input_stdin.length && isWhitespace(input_stdin[input_cursor])) {
        // ignore the next whitespace character
        input_cursor += 1;
    }  
}
