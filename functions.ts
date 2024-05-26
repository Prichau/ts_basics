function multiplyNumbers(a:number, b:number): number{
    return a*b;
};

export default multiplyNumbers;

export const addStrings = (str1: string, str2: string='hiopluk'): string => `${str1}  ${str2}`;

type formatFunction=(title: string, cover: string|number)=> string;
export const format:formatFunction=(title, cover)=>
    `${title} ${cover}`;

export const printFormat=(title: string, cover: string|number)=>{
    console.log(format(title, cover));
};

//promise - for url 
export const fetchData=(url: string)=> Promise.resolve(`murmur from ${url}`);


//optional parameters 
export function introduce(salutation: string, ...names: string[]){
    return `${salutation} ${names.join(' ')}`;
};


// interface- like a class
export interface Langauge{
    lang1: string;
    lang2: string;
    lang3: string;
}

export const printLanguage=(lang: Langauge)=>
    console.log(`${lang.lang1} ${lang.lang2} ${lang.lang3}`);

export const langauge3=(lang1:string, lang2: string, lang3: string)=>`${lang1} ${lang2} ${lang3}`;


// interface variable- give the values here 
export const language8:Langauge = {
    lang1: 'hindi',
    lang2:'english',
    lang3:'italiano'
};

// arrow function to a traditional function 
export function addStrings3(str2:string, param2:string){
    return str2+" "+ param2;
};

// arrow function- don't get confused with a variable 
export const addStrings4=(str3:string)=>`${str3}`;