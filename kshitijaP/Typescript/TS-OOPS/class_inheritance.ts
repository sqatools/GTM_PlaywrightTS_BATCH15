// Inheritance :
//  single inheritance : when one class is connected to another class via in inheritance
// then is is called, single inheritance.

class ABC {
    a1: number= 30
    b1: number = 40
    constructor(n1: number, n2:number){
        console.log("value of a1:")
        this.a1 = n1
        this.b1 = n2

    }

}

    //associacted with class obj}

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

    parentclass() {
        console.log("a1 value:", this.a1)
        console.log("b1 value:", this.b1)
    }

}


// Object of the clas
const obj1 = new PQR(10, 20, 300, 400)
obj1.showAllDetails()
obj1.parentclass()