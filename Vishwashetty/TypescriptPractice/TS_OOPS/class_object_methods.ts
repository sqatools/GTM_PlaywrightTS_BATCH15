// class : class is a blueprint of the object, where we declare all properties, 
//         methods inside the class

// object : Object is an entity or instance of the class through which we can access
//          all methods and attribute of the class.

// method : when we declare any function inside the class, then it becomes method.
// static method : this is associted with class name, no need to create object of the class
// to access properety of typescript OOPS.

// constructor :  constructore that initiliaze the memory for the object of the class.
//                by default constructore is being called, when we create object.



// class
class Person { 
    // declare properties of the class
    FirstName: string
    LastName: string
    email: string
    phone: number

    //default constructor
    // constructor(){
    //     console.log("---- Welcome to Person class ----")
        
    // }

    // parametrize constructor
    constructor(fname: string, lname: string, email: string, phone: number){
        console.log("---- Welcome to Person class ----")
        // initialize the porperty of the class.
            this.FirstName = fname
            this.LastName = lname
            this.email = email
            this.phone = phone
    }

    

    // method inside the class
    successMsg() {
        console.log("Execution is completed successfully")
    }

    // instance method
    addition(n1: number, n2: number) {
        console.log("addition :", n1+n2)

    }


    // // class access via obj, duplicte names are not allowed.
    // addition(n1: number, n2: number, n3: number) {
    //     console.log("addition :", n1+n2)

    // }

    // static method: that is associated with class name only
    static multiplication(v1:number, v2: number) {
        console.log("Multiplication :", v1+v2)

    }

    showUserDetails() {
        this.successMsg()
        console.log("First name :", this.FirstName)
        console.log("Last name :", this.LastName)
        console.log("Email :", this.email)
        console.log("Phone :", this.phone)
    }
}

// Object of the class
const obj = new Person("Rahul", "Gupta", "rahul@gmail.com", 9787879878)
// access method using class obj
obj.successMsg()
obj.addition(30, 40)
// static method is not accessible using class object
//obj.multiplication()


// call static method using classname
Person.multiplication(45, 7)

obj.showUserDetails()