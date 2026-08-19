class ABC {
    // ACCESS modifiers
    // public variable is accessible inside class and outside as well.
    public a: number
    // private variable is only access inside the class.
    private b: number
    // protected variable is access inside class its child class
    protected c:number
    constructor(a: number, b:number, c: number){
        console.log("value of a1:")
        this.a = a
        this.b = b
        this.c = c
    }

    valueofA(){
        console.log("Public variable : a:", this.a)
    }

}

class XYZ extends ABC{
    constructor(a: number, b:number, c: number) {
        super(a, b, c)
    }

    ValueofC(){
        console.log("Protected variable C:", this.c)
    }

    // ValueofB(){
    //     // private variable 
    //     console.log("Protected variable C:", this.b)
    // }
}


const obj = new XYZ(50, 60, 70)
obj.valueofA()
// Property 'b' is private and only accessible within class 'ABC'.
// obj.ValueofB()
obj.ValueofC()