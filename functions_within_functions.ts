// functions using callback 

export function printToFile(text: string, callback:()=>void): void{
    console.log(text);
    callback();
};

// 
export function multiplyArray(numbers: number[], mutltiplyer:(v: number)=> number){
    return numbers.map(mutltiplyer);

};

console.log(multiplyArray([2,8,9], (v)=> v*10));



// => - return 
type multiplyArrayFunction = (v: number)=>number;


export function multiplyArray2(numbers: number[], mutltiplyer: multiplyArrayFunction){
    return numbers.map(mutltiplyer);  // map - the method to apply func to all elements 

};

// function as a variable 
const a1:Array<number>= [2,8,9];
const f1: multiplyArrayFunction = (v)=> v*10;



console.log(multiplyArray(a1, f1));



