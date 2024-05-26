//interface- just to store the types of data and function 
// class- where you can create the objects 
// interface--> (optional)--> class --> objects (like variables of the class)
// constructor 

//EG- makeup 

interface Makeup{
    product: string;
    price: number;
    printCream():void;
};

class Creams implements Makeup{
    product;
    price;

    constructor(product:string, price:number){
        this.product=product;
        this.price=price;
    }

    printCream() {
        console.log(`Price: ${this.price} and product: ${this.product}`) // IMP - changes one time, result many times 
    }

}

const merdonaCream = new Creams('nyka', 89);
const alcampoCream = new Creams('deliplus', 99);
let allCreams: Creams[]= [];  // empty array 
allCreams.push(merdonaCream, alcampoCream);    // create an array using a method 




for (let i= 0; i< allCreams.length; i++){
    allCreams[i].printCream();   // always i - thats what you are iterarting 
};




