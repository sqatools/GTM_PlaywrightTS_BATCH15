// Inheritance :
//single inheritance : when one class is connected to another class via in inheritancethen is is called, single inheritance.

class ABC{
     // Declare the properties
    a1:number =3
    b1:number =4
    // Initialize the properties
    constructor(n1:number,n2:number){
        this.a1=n1
        this.b1=n2
    }
}
class PQR extends ABC{
    p1:number 
    p2:number
    constructor(m1:number,m2:number,n1:number,n2:number){
        //super Keyword is used to call the parent class constructr
        super(n1,n2)
        this.p1=m1
        this.p2=m2
    }
  // Reading/accessing the properties
    showAllDetails(){
        console.log("Child class values:",this.p1)
        console.log("Child class values:",this.p2)
       // console.log(this.a1)
       // console.log(this.b1)
    }

    parentclass(){
        console.log("Parent class values:",this.a1)
        console.log("Parent class values:",this.b1)    
    }
}
// Create objects
const obj1 = new PQR(3,4,30,40)
// Access the method using objects
obj1.showAllDetails()
obj1.parentclass()