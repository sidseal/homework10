// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name,id,email,officeNumber){
        super(name,id,email);
        this.officeNumber= officeNumber;
    };
    getRole(){
        return "Manager"
    };

    getOfficeNumber(){
        return this.officeNumber
    }

}

const manager = new Manager("sid","1","blahblah@ymail.com","123-456-7890")

console.log(manager.getOfficeNumber())
console.log(manager.getRole())



module.exports = Manager

// const manager = new Manager("sid","1","blahblah@ymail.com","123-456-7890")

// console.log(manager.getofficeNumber)