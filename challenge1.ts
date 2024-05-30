interface House {
    name:string;
    planets: string|string[];
}

interface HouseWithID {
    id:number;
    house:House;
}

import housesData from "./houses.json";

// json array- [{"key:value","key:value"}] instead of []. like dictionary in python 

const arrayToString: string= JSON.stringify(housesData);  // stringify- array to string
// console.log(arrayToString);

// const stringToArray:House[]= JSON.parse(arrayToString);  // parse- string to array
// console.log(stringToArray);

function findHouses1(houses: string): HouseWithID[]{
    let arrayOfHouses: House[]= JSON.parse(houses);
    let arrayOfHousesWithIds:HouseWithID[]= [];
    let house: HouseWithID;

    for(let h=0; h<arrayOfHouses.length; h++){
        house = {
            house:arrayOfHouses[h],    // [1,23,3]- accessing each element of []
            id: h
        };
        arrayOfHousesWithIds.push(house);
    };
    return arrayOfHousesWithIds;
}


function findHouses2(houses: House[]): HouseWithID[] {
    return findHouses(JSON.stringify(houses));
}


type filterFunction = (v : House)=> boolean;
function findHouses(houses: string|House[], filter?: filterFunction): HouseWithID[] {   // a|b - can take 2 types at the same time 
    let arrayOfHouses: House[] =[];
    if ( typeof houses==='string'){
        arrayOfHouses=JSON.parse(houses);
    }else if(typeof houses==='object'){
        arrayOfHouses= houses;
    };

    let arrayOfHousesWithIds:HouseWithID[]= [];
    let house: HouseWithID;

    for(let h=0; h<arrayOfHouses.length; h++){
        house = {
            house:arrayOfHouses[h],    // [1,23,3]- accessing each element of []
            id: h
        };

        if(typeof filter=== 'function' &&  filter(arrayOfHouses[h])===true){
            arrayOfHousesWithIds.push(house);
            return arrayOfHousesWithIds;
        }else if( typeof filter ==='undefined'){
            arrayOfHousesWithIds.push(house);
        }
        
    };
    return arrayOfHousesWithIds;
}

// console.log(findHouses(arrayToString));
// console.log(findHouses(housesData));


const filt1: filterFunction= ({name, planets}) => {
if(name==='Atreides'){
    return true;
}else{
    return false;
}

};


console.log(
    findHouses(JSON.stringify(housesData), filt1)
);


console.log(findHouses(housesData, ({ name }) => name === "Hharkonnen"));

