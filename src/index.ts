//create an interface for an object
//it should accept a title string
//it should accept a status boolean
//it should accept an id number

interface obj {
    title:string;
    status:boolean;
    id:number;
}

const todo : obj = {
    title:"learn react",
    status:false,
    id:1,
};


//create a function getName
//it should accept an object firstname and lastname
//it should return fullname
//keep lastname optional.
//if lastname does not exist then return only firstname
//make a interface for it

interface obje {
    first_name:string;
    last_name?:string;
}

const getName = ({first_name,last_name}:obje) => {
    return `first_name,last_name`
};
    let names : obje = {
        first_name:"masai",
        last_name : "school",
    }

    getName(names);

    
// create an interface Address
// it takes
// houseNumber
// street
// city
// state
// postalCode
// country
// add appropriate types

interface obj2 {
    houseNumber:number;
    street:string;
    city:string;
    state:string;
    postalCode:number;
    country:string;
}

const address : obj2 = {
    houseNumber:25,
    street:"deendayal road",
    city:"adoor",
    state:"kerala",
    postalCode:691526,
    country:"India",
};

console.log(address);


// create a PersonDetails interface
// it should have
// Prefix optional
// phones array of numbers
// addresses array of Addresses
// email optional
// firstname
// lastname
// middlename optional


interface obj3 {
    Prefix?:string;
    phones:number[];
    addresses:string[];
    email?:string;
    firstname:string;
    lastname:string;
    middlename?:string
}

const PersonDetails : obj3 = {
    phones:[9,8,9,7,5,6,1,2,7,4],
    addresses:["santom","villa","erode","tamilnadu"],
    email:"santom@gmail.com",
    firstname:"santom",
    lastname:"sravan",
    middlename:"s"
};

console.log(PersonDetails);

// create a function PhoneBook
// it should accept PersonDetails type argument
// it should push into an array containing all persons

interface obj4 {
    first_name:string;
    last_name:string;
}

const PhoneBook = ({first_name,last_name}:obj4) => {
    return `first_name,last_name`
};
    let persons : obj4 = {
        first_name:"masai",
        last_name : "school",
    }

    getName(persons);


