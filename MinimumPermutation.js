function inserir(A, s) {
  let index;
  const found = A.find((e, i) => {
    if (e > s) {
      index = i;
      return true;
    }
  });

  if (found) {
    A.splice(index, 0, s);
  } else {
    A.push(s);
  }
}

function minimum(A, S) {
  S.forEach(s => inserir(A, s));
}

function main() {
    // write your code here.
    // call functions `nextString`, `nextFloat` and `nextInt` 
    // to read the next token of input (ignoring whitespace)
    // Alternatively, you can create your own input parser functions
    // use console.log() to write to stdout
    var N = nextInt();
    var M = nextInt();
    var A = [];
    var S = new Set();
    
    for (let i = 0; i < N; i++) {
        A.push(nextInt());
    }
    
    for (let i = 0; i < M; i++) {
        S.add(nextInt());
    }
    
    minimum(A, S);

    let str = "";
    A.forEach(e => {
        str += String(e) + " ";
    });
    
    console.log(str);
    
    return;
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
