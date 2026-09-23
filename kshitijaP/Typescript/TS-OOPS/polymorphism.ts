//Polymorphism : when one specific method perform multiple task, then it is called polymorphism.
// method overrding : when two classed are connected to each other via inheritance and both class have method
// with same name, than child class will override the parent class method.

// Method overloading : when one class 2 methods with same with different parameters, then it is called
// method overloading.

// Method overloading is not supported in Typescript, as duplicate method names are not allowed.

class ABC {
    a1: number= 30
    b1: number = 40
    constructor(n1: number, n2:number){
        console.log("value of a1:")
        this.a1 = n1
        this.b1 = n2

    }

    addition(){
        console.log("Addition output class ABC :", this.a1+this.b1)
    }

    // duplicate methods are not allowed.
    // multiplication(n1: number, n2: number, n3: number){
    //     console.log("multiply value :", n1*n2*n3)
    // }

    // multiplication(n1: number, n2: number){
    //     console.log("multiply value :", n1*n2)
    // }

}

class PQR extends ABC {
    p1: number
    p2: number

    constructor(p1: number, p2: number, n1:number, n2:number) {
        // super keyword is used to call the parent class constructor
        super(n1, n2)
        this.p1 = p1
        this.p2 = p2
    }

    showAllDetails() {
        console.log("p1 :", this.p1)
        console.log("p2 :", this.p2)
    }

    addition(){
        console.log("Addition output class PQR :", this.p1+this.p2)
    }
}


// Object of the clas
const obj1 = new PQR(10, 20, 300, 400)
obj1.addition()