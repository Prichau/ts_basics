// filter function 
// for each function 
// map function 


interface SeaCreature {
    emoji: string;
    deadly: boolean;
    legs: number
}

const ocean: SeaCreature[]=[
    {emoji: '🦈', deadly: true, legs: 2},
    {emoji: '🐢', deadly: false, legs: 4},
    {emoji: '🐙', deadly: true, legs: 8},
];

ocean.push({emoji: '🦀', deadly: false, legs: 6});

let emojis: string[] = [];
for(let row=0; row<ocean.length; row++){
    emojis.push(ocean[row].emoji);   // forgetful
};

console.log(emojis);

let newArray: string[]=[];

newArray= ocean.map(row=>row.emoji);  // map- alternative of for loop

ocean.forEach(row=> console.log(row.legs));   // a list of elements instead of array

console.log(ocean.filter(row=> row.deadly === true));

let deadlyGang : SeaCreature[] = ocean.filter(eachElement=> eachElement.deadly);

deadlyGang.forEach(eachElements=> console.log(eachElements.deadly));  // eachelement.something is going to give u a list 