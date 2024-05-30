function printIng(quantity: string, ingredient: string='flour', country?: string){
    
    // if(country===undefined){ // traditional method to check the existence 
    //     console.log(`${quantity} chocolate ${ingredient}`)   // no need for concatenantion
    // } else {
    //     console.log(`${quantity} chocolate ${ingredient} ${country}`)   
    // };
    console.log(`${quantity}  ${ingredient} ${country? country: ''}`)   // shortcut( if and else )- ternary operator (condition)?return if: return else
};

printIng('100ml' );
printIng('100ml', 'milk', 'india' );


// optional fields 


interface User{   // always mention the type 
    id: number;
    info?: {
        email: string;
    }
};

// new school 

// function getEmail(user: User): string{
//     return user.info? user.info.email: '';
// }


function getEmail(user: User): string{
    return user?.info?.email?? '';
}



// function getEmail(user: User): string{
//     if(user.info){
//         return user.info.email;
//     } else {
//         return ''
//     };
// };

//optional callback 

function addWithCallback (x: number, y: number, callback?: () => void){
    console.log(`${x+y} ${y}`);  // for any type of data/ operations 
    callback?.();
}

addWithCallback(12, 35, ()=>console.log());  // checking if the function exists 



const user1 : User= {id:1 , info:{email:'chauhan19293o0o@gmail.com'}};  // creating an interface object / var/ instance 
console.log(getEmail(user1));

