type ThreeMusks = [x: number, y: number, z: number];     // array of key types (any types)

function add3Musks(a1: ThreeMusks, a2: ThreeMusks): ThreeMusks{
    return [
        a1[0] + a2[0],
        a1[1] + a2[1],
        a1[2] + a2[2],
    ]
};

const result: ThreeMusks= add3Musks([2,3,4], [9, 5, 6]);

console.log(result);

// tuples with diff types 

type func1=()=>string;
type func2=(v: string)=> void;

function simpleStringState( initial: string): [func1, func2]{
    const checking: func1 = ()=>  'KAKIJK';
    const checking2: func2 = (arg)=> console.log(arg);

    return [checking, checking2];

};

const [fun1, fun2] = simpleStringState("pri");
console.log(fun1());
fun2('pri');
