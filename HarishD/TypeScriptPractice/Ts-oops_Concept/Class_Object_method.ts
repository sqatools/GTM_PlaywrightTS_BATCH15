// class: class is a blueprint of the object,where we declare all properties, methods inside the class
// object:object is an entity or instance of a class through which we can access methods and attributes of the class
// method:when we declare any function inside the class, then it becomes method.
// static method:This is associated with class name,no need to create object of the class
// to access property of typescript oops
// constructor: constructor initializes the memory for the object of the class.
// by default constructor is being called, when we create object




class person {         // class is a keyword 
    // method inside class

    success() {       // non static method
        console.log("Executed successfully")

    }
    addition(n1:number,n2:number)
    {
        console.log("addition of two numbers :", n1+n2)
    }

    static multiplication(a:number,b:number){
     console.log("multiplication of two numbers :", a*b)

    }
}

//Object of the class
const obj = new person()    //object created 
//access the method using class onj
obj.success()
obj.addition(50,69)
//obj.multiplication(20,5)--Static method cannot access by using obj
//it is accessing by class name
person.multiplication(20,5)