var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
// Update this function to use the interface and new variable
function greeter(person) {
    return "Hello," + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "m.", "User");
document.body.innerHTML = greeter(user);
