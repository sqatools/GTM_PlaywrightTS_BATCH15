class Employee {
    name: string;
    role: string;

    constructor(name: string, role: string) {
        this.name = name;
        this.role = role;
    }

    displayDetails() {
        console.log(this.name);
        console.log(this.role);
    }
}

const employee = new Employee("Rupali", "QA Engineer");

employee.displayDetails();


class Person{
    //    FirstName: string
    // LastName: string
    // email: string
    // phone: number

     successMsg() {
        console.log("Execution is completed successfully")
    }
}
const obj = new Person()
obj.successMsg()


class math_addition{
    addition(n1:number,n2:number){
        console.log("addition is:", n1+n2)

    }
}
var obj1 =new math_addition();
obj1.addition(10,20)

class math_multiply{
    static multiplication(v1:number, v2:number){
        console.log("multiplication is:", v1+v2)
    }
}
math_multiply.multiplication(2,2)


class construct{
    succMsg(){
        console.log("success")
    }
    constructor(){
        console.log("welcome to learning")
    }

    C_addition(a:number, b:number){
        console.log(a+b)
    }
    
}
// var obj2 =new construct()
// obj2.C_addition(2,4)



// parameterized constructor
class personDetails{
     FirstName: string
    LastName: string
    email: string
    phone: number

constructor(fname: string, lname: string, email: string, phone: number){
        console.log("---- Welcome to Person class ----")
        // initialize the porperty of the class.
            this.FirstName = fname
            this.LastName = lname
            this.email = email
            this.phone = phone
    }
    showUserDetails() {
       
        console.log("First name :", this.FirstName)
        console.log("Last name :", this.LastName)
        console.log("Email :", this.email)
        console.log("Phone :", this.phone)
    }
}
const obj3 = new personDetails("Rahul", "Gupta", "rahul@gmail.com", 9787879878)
obj3.showUserDetails()