function multiplyNumbers(a:number, b:number): number{
    return a*b;
};

export default multiplyNumbers;

export const addStrings = (str1: string, str2: string='hiopluk'): string => `${str1}  ${str2}`;

export const format=(title: string, cover: string|number)=>
    `${title} ${cover}`;

export const printFormat=(title: string, cover: string|number)=>{
    console.log(format(title, cover));
};

export const fetchData=(url: string)=> Promise.resolve(`murmur from ${url}`);


export function introduce(salutation: string, ...names: string[]){
    return `${salutation} ${names.join(' ')}`;
};

export interface Langauge{
    lang1: string;
    lang2: string;
    lang3: string;
}

export const Language=(lang1: Langauge)=>
    console.log(`${lang1.lang1} ${lang1.lang2} ${lang1.lang3}`);