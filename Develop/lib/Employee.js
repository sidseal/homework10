// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };
    getName() {
        return(this.name);
    };
    getId() {
        return(this.id);
    };
    getEmail() {
        return(this.email);
    };
    getRole() {
        return("Employee");
    };

};

// const employee = new Employee("Sid","100","blahblah@ymail.com")

// console.log(employee.getName())
// console.log(employee.getId())
// console.log(employee.getRole())

module.exports = Employee;
