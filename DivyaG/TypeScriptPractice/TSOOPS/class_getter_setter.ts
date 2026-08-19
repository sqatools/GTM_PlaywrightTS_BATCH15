//getter and setter helps us to set the class property value
//to access the setter and getter to no need to provide method brackets
//we can access as a class property value

class person{
    public _name:string
    private _age:number
    protected _email:string
    constructor(_name:string,_age:number,_email:string){
    this._name=_name
    this._age=_age
    this._email=_email
    }

    get age()
    {
        return this._age
    }

    set age(newvalue:number){
        this._age=newvalue
    }
}

const obj1= new person("Diya",25,"diya@gmail.com")
//get age using getter method
console.log(obj1.age)
//set the age value using setter method
obj1.age=30
console.log(obj1.age)

