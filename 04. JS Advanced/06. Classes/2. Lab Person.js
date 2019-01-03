function Person(firstName, lastName, age, email) {
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
    this.email=email;

}

Person.prototype.toString = function () {
    return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
}

let person = new Person("Peter", "Marinov", 18, "pesho18@abv.bg");
console.log(person.toString());