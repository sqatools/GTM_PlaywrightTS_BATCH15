// Inheritance :
//  Hierachical Inheritance : when one class is connected to multiple other classes.
// then is is called, single inheritance.

class A {
    Method_A(){
        console.log("Method from class A")
    }
}


class B extends A {
    Method_B(){
        console.log("Method from class B")
    }
}


class C extends A{
    Method_C(){
        console.log("Method from class C")
    }
}

console.log("----------------------------")
const objB = new B()
objB.Method_A()
objB.Method_B()
console.log("----------------------------")
const objC = new C()
objC.Method_A()
objC.Method_C()


// multiple inheritance : TypeScript does not support multiple class inheritance because JavaScript,
//  its underlying runtime language, relies on a single-prototype chain restriction.
//  Because TypeScript compiles directly to JavaScript, it must abide by JavaScript's execution rules

/*
1. JavaScript Prototypal Limitations: JavaScript uses prototypal inheritance rather than classical inheritance. 
An object in JavaScript has exactly one internal prototype link ([[Prototype]]). 
A single object cannot point to two different prototype objects simultaneously.

2. The Diamond Problem: If multiple inheritance were allowed, a child class inheriting from two parent
 classes that share a common ancestor would face ambiguity. 
 If both parents override the same method, the compiler 
 cannot cleanly determine which parent's method to execute.
 
3. Design Philosophy: TypeScript's design goal is to provide a type system for standard JavaScript 
without altering its runtime behavior. Adding complex multiple inheritance logic would require heavy 
runtime wrapper code, violating TypeScript's emit-clean-JavaScript design tenet.

*/