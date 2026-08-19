class person{

    name:string
    age:number
    city:string
    phone:string



constructor(name:string,age:number,city:string,phone:string){


console.log(this.name=name)
console.log(this.age=age)
console.log(this.city=city)
console.log(this.phone=phone)

    }

    display()
    {
        console.log("In Display method")
    }
    static show()
    {
        console.log("in show method")
    }

     sound(name:string){

        console.log("parameterized sound method")
        console.log(this.name=name)
        
     }


}
var o=new person("Viraj",16,"pune","9898989898")

o.display()
o.sound("dnyaneshwar")
person.show()
