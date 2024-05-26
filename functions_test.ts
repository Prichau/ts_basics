import multiplyNumbers, { addStrings, addStrings3, addStrings4, fetchData, format, introduce, language8, printFormat, printLanguage } from "./functions";

console.log(multiplyNumbers(2,3));
console.log(multiplyNumbers(2,0));

console.log(addStrings('hi', 'hoo'));
console.log(addStrings('hi'));
console.log(format('harry', 89));
printFormat('kiki', 'kaka');
fetchData('https://github.com/Prichau/ts_basics/blob/main/basics.ts').then(data=>console.log(data));
console.log(introduce('hi', 'jj', 'kiki', 'kaka'));
printLanguage({lang1: 'spanish', lang2:'konkani', lang3:'italian'});
console.log(addStrings3('hola', 'javo'));
console.log(addStrings4('chah'));
console.log(language8);
