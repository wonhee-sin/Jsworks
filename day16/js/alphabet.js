let alphabet = new Array(26);
let ch = 'A'; //코드값 65
ch = ch.charCodeAt(0);
console.log(ch);

//저장
for(i =0; i < alphabet.length; i++){
     alphabet[i] = ch;
     ch++;
}

//출력
for(i = 0; i < alphabet.length; i++){
     console.log(alphabet[i] + ", " + String.fromCharCode(alphabet[i]));
}