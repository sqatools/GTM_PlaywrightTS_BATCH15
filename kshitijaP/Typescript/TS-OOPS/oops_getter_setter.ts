//-> getter and setter help us to set the class property values using object.
// -> to access the setter and getter to no need to provide method brackets.
// -> we can access class property variable.

class Person{
    public _name : string
    private _age : number
    protected _email: string
    constructor(_name: string, _age: number, _email: string) {
        this._name = _name
        this._age = _age
        this._email = _email 
    }

    get age(){
        return this._age
    }

    set age(newvalue: number){
        this._age = newvalue
    }
}

const PObj = new Person("Mohit", 25, "mohit@gmail.com")
// get age using getter
console.log(PObj.age)

// set age value using setter
PObj.age = 30
console.log("New age :", PObj.age)