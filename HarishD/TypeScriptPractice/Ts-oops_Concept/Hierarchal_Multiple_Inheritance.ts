//Hierachical Inheritance : when one class is connected to multiple other classes. then is is called, single inheritance.

class Parent{

     ParentName :string
     ParentProperty:string

    constructor(Pname: string , Pproperty: string)
    {
        this.ParentName=Pname
        this.ParentProperty=Pproperty
    }
    ShowParentDetails(){
        console.log("ParentName :", this.ParentName)
        console.log("ParentProperty:",this.ParentProperty)
    }
}

class child1 extends Parent{

    child1Name : string
    child1Business :string

    constructor(C1Name :string,C1Business:string,Pname: string , Pproperty: string)
    {
        super(Pname,Pproperty)
        this.child1Name=C1Name
        this.child1Business=C1Business

    }
     showchild1details(){
         console.log("child1 NAMe:",this.child1Name)
         console.log("child1 Business:",this.child1Business)
     }

}

class child2 extends Parent{

    child2Name : string
    child2Business :string

    constructor(C2Name :string,C2Business:string,Pname: string , Pproperty: string)
    {
        super(Pname,Pproperty)
        this.child2Name=C2Name
        this.child2Business=C2Business

    }
     showchild2details(){
         console.log("child1 NAMe:",this.child2Name)
         console.log("child1 Business:",this.child2Business)
     }

}

 const obj1 = new child1("Harish","Textile","Vital","200Acrs")
 obj1.showchild1details()
 obj1.ShowParentDetails()

  const obj2 = new child2("MOHAN","STONE BUSINESS","Vital","200Acrs")
  obj2.showchild2details()
   obj2.ShowParentDetails()


/*
multiple inheritance : Javascript does not support multiple class inheritance because JavaScript,
  its underlying runtime language, relies on a single-prototype chain restriction. 
  Because TypeScript compiles directly to JavaScript, it must abide by JavaScript's execution rules

1. JavaScript Prototypal Limitations: JavaScript uses prototypal inheritance rather than classical 
inheritance. An object in JavaScript has exactly one internal prototype link ([[Prototype]]). 
A single object cannot point to two different prototype objects simultaneously.

2. The Diamond Problem: If multiple inheritance were allowed, a child class inheriting from two parent
 classes that share a common ancestor would face ambiguity. 
 If both parents override the same method, the compiler 
 cannot cleanly determine which parent's method to execute.
 
3. Design Philosophy: TypeScript's design goal is to provide a type system for standard JavaScript 
without altering its runtime behavior. Adding complex multiple inheritance logic would require heavy 
runtime wrapper code, violating TypeScript's emit-clean-JavaScript design tenet.

*/



  
 