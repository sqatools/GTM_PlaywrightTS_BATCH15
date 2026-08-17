// Encapsulation binds all the data members and member functions together as a single unit.
// It is the mechanism that restricts access to some of the object's components,
//  which means that the internal representation of an object can't be seen from outside 
// of the objects definition. Access to this data is typically achieved through special 
// methods called getters and setters.

class ABC{
    //Access Modifiers
    //Public varaiable can access inside and outside of the class
    //private variable can access inside the class
    //protected variable can access inside and its child
    public a:number
    private b:number
    protected c:number
    constructor(a:number,b:number,c:number){
        this.a=a
        this.b=b
        this.c=c
    }
    valueOfA(){
        console.log("Public variable:",this.a)
    }
}

class XYZ extends ABC{
    constructor(a:number,b:number,c:number){
        super(a,b,c)
        this.a=a
        //this.b=b
        this.c=c
    }
//    Property 'b' is private and only accessible within class 'ABC'.
    /* valueOfB(){
        console.log("Private variable:",this.b)
    } */

    valueOfC(){
        console.log("Protected variable:",this.c)
    }

}

const obj1 = new XYZ(30,40,50)
obj1.valueOfA()
// Property 'b' is private and only accessible within class 'ABC'.
//obj1.valueOfB()
obj1.valueOfC()

