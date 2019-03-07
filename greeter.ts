
class Student {
    fullName : string ;
    constructor (public firstName: string, public middleInitial: string, public lastName: string)
    {
        this.fullName= firstName + " " + middleInitial + " " +  lastName;    
    }
    
}

interface Person {
        firstName : string ;
        lastName: string ;
}


// Update this function to use the interface and new variable
function greeter(person: Person) {
    return "Hello," + person.firstName + " " + person.lastName ;
}

let user = new Student("Jane", "m.", "User");

document.body.innerHTML = greeter(user);
