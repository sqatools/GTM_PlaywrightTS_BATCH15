//when multiple classes are connected to each other in a sequence is called 
// multi level inheritance
// multiple inheritance is not supported in typescript and javascript

class GrandParent{
   GPName : string
   GPProperty : string
    constructor(GPName: string = "Dayakar", GPProperty: string ="200 Acre Land"){
        this.GPName = GPName
        this.GPProperty= GPProperty
    }
    showGrandParentDetails(){
        console.log("Grand parent name:",this.GPName)
        console.log("Grand Parent property details:",this.GPProperty)
    }

}

class Parent extends GrandParent{
    PBusiness:string
    constructor(PBusiness:string, GPName: string, GPProperty: string){
        super(GPName,GPProperty)
        this.PBusiness = PBusiness
    }
    showParentDetails(){
        console.log("Parent Business Details:",this.PBusiness)
    }
}

class Child extends Parent{
    Cname:string
    constructor(Cname:string, PBusiness:string, GPName: string, GPProperty: string){
    super(PBusiness,GPName,GPProperty)
        this.Cname = Cname
    }
    showChildDetails(){
        console.log("Child details:",this.Cname)
    }

    showAllDetails(){
        this.showGrandParentDetails()
        this.showParentDetails()
        this.showChildDetails()
    }
}
const obj1 = new Child("Rakshit","Construction","Dayakar","200 Acre Land")
obj1.showAllDetails()
