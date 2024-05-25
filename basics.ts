let userName: string = "Priyanka";
let hasLoggedIn: boolean = true;

userName += ' chauhan';

console.log(userName);

let myAge: number = 24;

const names: string[]= userName.split('a');

const myValues: Array<string> = ['hi', 'hello'];

console.log(myValues);

interface Person {
    nationality: string;
    partner: string;
    speaksSpanish: boolean;
} 

let myLife: Person= {
    nationality: 'India',
    partner: 'puerta',
    speaksSpanish: true,
};

myLife.speaksSpanish= false;

const scores:Record<string, number>={
    ryan: 10,
    mayan:30,
    nyan:100
}

scores['nyan']=40;



console.log(scores);