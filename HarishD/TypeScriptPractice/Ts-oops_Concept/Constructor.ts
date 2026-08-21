// constructor : A constructor is a special method inside a class that is automatically executed when an object (instance) is created using the new keyword.
// Constructor — Key Points
// Constructor is a special method inside a class.
// It is automatically called when you create an object using new.
// Constructor name must be constructor.
// It is mainly used to initialize object properties.
// A class can have only one constructor.
// A constructor can accept parameters.
// It does not have a return type — don't write void, string, etc.
// You can use access modifiers like public, private, and protected.
// In TypeScript, constructor parameters can directly create class properties using public, private, protected, or readonly.
// If you don't write a constructor, TypeScript provides a default constructor.
//this is a keyword that refers to the current object (instance) of the class. It is used to access or initialize the properties and methods of that object.

//Why constructor is req  : It is required/useful when you want to initialize something when an object is created or run some setup code automatically.
// class person{
//     // default constructor
//     constructor(){
//         console.log("Hi team i am learninng the constructor")
//     }
// }

// const obj= new person()



class Person1 {

    // Declare the properties
    firstname: string
    lastname: string
    PhoneNumebr: number
    email: string

    // Age method
    Person(age: number) {
        console.log("Age of the person:", age)
    }

    // Initialize the properties
    constructor(fname: string,pn: number,em: string,lname: string,age: number ) {
        this.firstname = fname
        this.lastname = lname
        this.email = em
        this.PhoneNumebr = pn

        // Calling Person() method
        this.Person(age)
    }

       // Reading/accessing the properties
        showUserDetails(age: number) {
        console.log("First name:", this.firstname)
        console.log("Last name:", this.lastname)

        // Calling Person() method
        this.Person(age)

        console.log("Phone:", this.PhoneNumebr)
        console.log("Email:", this.email)
    }
}

// Create objects
const obj = new Person1("Harish",9901289091,"typescript123@gmail.com","Deshpande",30)

const obj2 = new Person1( "Ravi", 8812980971, "typescript123123@gmail.com", "SAITEHA", 24)

// Access the method using objects
obj.showUserDetails(30)
obj2.showUserDetails(24)