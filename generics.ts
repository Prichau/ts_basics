// type funcGet=()=>string;
// type funcSet=(v: string)=> void;

// function simpleStringState(initial: string): [funcGet, funcSet]{
//     let str: string = initial;
//     const get: funcGet = ()=> initial;
//     const set: funcSet = (arg)=> initial=arg;

//     return [get, set];
// };
// const [f1, f2]=simpleStringState("priya");
// console.log(f1(), f2('hello'),f1());


function simpleStringState1<T>(variable: T): [()=> T, (argu: T)=> void]{   // function returning function
    let localVariable: T= variable;
    const var1 : ()=> T =()=> localVariable;
    const var2 : (argu: T)=> void = (argu)=> localVariable= argu;  // values changed 

    return [var1, var2];

};

interface House{
    windows: string;
    size: number| string;  // | optional = this or that 
}

const house1: House = {windows: 'indian', size: 1000};   //  in an interface var - windows: == equals to
const house2: House = {windows: 'spanish', size: '100 m2'}


interface GenericHouse<GeneralType>{
    windows: string;
    size: GeneralType;  // | optional = this or that 
}

const house3: GenericHouse<number> = {windows: 'indian', size: 1000};   //  in an interface var- windows: == equals to
const house4: GenericHouse<boolean> = {windows: 'spanish', size: true}  // you can change any type in a data type 


const [f1, f2]=simpleStringState1<number|string>(6);
console.log(f1(), f2('casa'),f1());