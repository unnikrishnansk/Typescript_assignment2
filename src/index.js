//create an interface for an object
//it should accept a title string
//it should accept a status boolean
//it should accept an id number
var todo = {
    title: "learn react",
    status: false,
    id: 1
};
var getName = function (_a) {
    var first_name = _a.first_name, last_name = _a.last_name;
    return "first_name,last_name";
};
var names = {
    first_name: "masai",
    last_name: "school"
};
getName(names);
var address = {
    houseNumber: 25,
    street: "deendayal road",
    city: "adoor",
    state: "kerala",
    postalCode: 691526,
    country: "India"
};
console.log(address);
var PersonDetails = {
    phones: [9, 8, 9, 7, 5, 6, 1, 2, 7, 4],
    addresses: ["santom", "villa", "erode", "tamilnadu"],
    email: "santom@gmail.com",
    firstname: "santom",
    lastname: "sravan",
    middlename: "s"
};
console.log(PersonDetails);
var PhoneBook = function (_a) {
    var first_name = _a.first_name, last_name = _a.last_name;
    return "first_name,last_name";
};
var persons = {
    first_name: "masai",
    last_name: "school"
};
getName(persons);
