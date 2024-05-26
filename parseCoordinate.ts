// COORDINATE- latitude and longitude 


interface Coordinate{    // TO have all variables together no matter what . Does what a variable can't. 
    x:number;
    y:number;
};

function parseCoordinateFromObject(obj: Coordinate){
    return{
        ...obj,    // ...- x: obj.x, y: obj.y
    }
};

//console.log(parseCoordinateFromObject({x:1,y:2}));

const coordinateVar: Coordinate = {x:1, y:2};  // to create an object of an interface- {}


console.log(parseCoordinateFromObject(coordinateVar));   // tip- just write the name of the variable
// why var?- for reusing and shorter

function parseCoordinateFromNumbers(x: number, y: number){       // for numbers 
    return {x, y};
};

console.log(parseCoordinateFromNumbers(2,1));

function parseCoordinate(first: unknown, second?: unknown): Coordinate{
    let coord:Coordinate={
        x:0,
        y:0
    };

    if (typeof first==='object'){
        coord=first as Coordinate;
    }else if(typeof first==='number' && typeof second==='number'){
        coord.x= first as number;
        coord.y= second as number;
    }

    return coord;
}

console.log(parseCoordinate(9,0));
console.log(parseCoordinate({x:9, y:0}));


