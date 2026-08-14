// class: class is a blueprint of the object,where we declare all properties,
// methods inside the class
// object:object is an entity or instance of a class through which we can access methods
// and attributes of the class
// method:when we declare any function inside the class, then it becomes method.
// static method:This is associated with class name,no need to create object of the class
// to access property of typescript oops
// constructor: constructor initializes the memory for the object of the class.
// by default constructor is being called, when we create object

//class
class person{
    // method inside class

    success(){
        console.log("Executed successfully")
    }
    //instance method inside the class
    addition(n1:number,n2:number){
        console.log(n1+n2)
    }
    //static method uses class name to access
    static multiplication(v1:number,v2:number){
        console.log(v1*v2)
    }

}
//object of the class
const obj = new person()
// access method using object
obj.success()
obj.addition(9,10)
//obj.multiplication(9,1)--Static method cannot access by using obj
//it is accessing by class name
person.multiplication(9,1)

/* Executed successfully
19
9 */

// default constructor
class defaultconstr{
   
    //default constructor
    constructor(){
        console.log("-------welcome constructor")
    }

}

const obj1 = new defaultconstr()
// -------welcome constructor

//paramaterized constructor

class userDetails{

    firstName: string
    lastName: string
    phone: number
    email: string

    constructor(fname:string, lname:string,pp:number,em:string){
        // initialize the property of the class
        this.firstName = fname
        this.lastName = lname
        this.phone = pp
        this.email = em
    }

    showUserDetails(){
        console.log("First name:",this.firstName)
        console.log("Last name:",this.lastName)
        console.log("Phone:",this.phone)
        console.log("email:",this.email)
    }
 
}
const obj2 = new userDetails("Divya","Gudivada",9809809809,"divya@gmail.com")
obj2.showUserDetails()
/* First name: Divya
Last name: Gudivada
Phone: 9809809809
email: divya@gmail.com */

//this keyword is used in the method to print the message
class userDetails1{

    firstName: string
    lastName: string
    phone: number
    email: string

    constructor(fname:string, lname:string,pp:number,em:string){
        // initialize the property of the class
        this.firstName = fname
        this.lastName = lname
        this.phone = pp
        this.email = em
    }

     successMsg(){
        console.log("Executed successfully")
     }

    showUserDetails(){
        this.successMsg()
        console.log("First name:",this.firstName)
        console.log("Last name:",this.lastName)
        console.log("Phone:",this.phone)
        console.log("email:",this.email)
    }
 
}
const obj3 = new userDetails1("Divya","Gudivada",9809809809,"divya@gmail.com")
obj3.showUserDetails()
/* Executed successfully
First name: Divya
Last name: Gudivada
Phone: 9809809809
email: divya@gmail.com */

//Method overloading is not allowed in typescript
//class access via obj,duplicate names are not allowed

class person1{
    // method inside class

    success(){
        console.log("Executed successfully")
    }
    //instance method inside the class
    addition(n1:number,n2:number){
        console.log(n1+n2)
    }
    //duplicate method name
    addition(v1:number,v2:number,v3:number){
        console.log(v1+v2+v3)
    }//Duplicate function implementation.

}
//object of the class
const obj4 = new person1()
// access method using object
obj4.success()
obj4.addition(9,10)
obj4.addition(9,1,2)

