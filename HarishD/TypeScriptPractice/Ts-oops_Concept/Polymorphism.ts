class Employee {

    employeeName: string

    constructor(name: string) {
        this.employeeName = name
    }

    calculateSalary() {
        console.log("Employee salary calculation")
    }
}


class Developer extends Employee {

    calculateSalary() {
        console.log(this.employeeName + " is a Developer")
        console.log("Developer salary: ₹60,000")
    }
}


class Tester extends Employee {

    calculateSalary() {
        console.log(this.employeeName + " is a Tester")
        console.log("Tester salary: ₹50,000")
    }
}

const obj1 = new Developer("Harish")
const obj2 = new Tester("Ravi")

obj1.calculateSalary()
obj2.calculateSalary()