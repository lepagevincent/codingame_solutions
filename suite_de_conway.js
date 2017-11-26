var R = parseInt(readline());
var L = parseInt(readline());

var lastLine = [R];
var nextLine = [];

for(var b = 1; b < L; b++) {
    for(var i = 0; i < lastLine.length; i++) {
        if(nextLine.length == 0 || lastLine[i] != nextLine[nextLine.length - 1] ) { // Si c'est la première ligne où un nouveau chiffre
            nextLine.push(1);
            nextLine.push(lastLine[i]);
        } else {
            nextLine[nextLine.length - 2]++;
        }
    }
    
    lastLine = nextLine.slice(0);
    nextLine = [];    
}

print(lastLine.join(' '));
