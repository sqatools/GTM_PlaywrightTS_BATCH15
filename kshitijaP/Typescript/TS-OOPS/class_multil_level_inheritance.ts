// multi level inheritance: when multiple classes are connected to each other in sequence then it is called
// multi level inheritance.

// class A -> class B -> class C

class GrandParent {
    GPName: string
    GPProperty : string

    constructor(GPname: string="DayaRam", GPProperty: string= "200AcrLand") {
        this.GPName = GPname
        this.GPProperty = GPProperty

    }

    ShowGrandParentDetails(){
        console.log("Grand Parent name:", this.GPName)
        console.log("Grand Parent Property: ", this.GPProperty)

    }


}

class Parent extends GrandParent {
    PBusiness: string
    constructor(PBusiness: string, GPname: string, GPProperty: string) {
        super(GPname, GPProperty)
        this.PBusiness = PBusiness
    }

    ShowParentBusiness() {
        console.log("Parent Business :", this.PBusiness)
    }
}

class Child extends Parent {
    CName: string
    constructor(CName: string, PBusiness: string, GPname: string, GPProperty: string) {
        super(PBusiness, GPname, GPProperty)
        this.CName = CName
    }

    ShowChildName() {
        console.log("Child Name :", this.CName)
    }

    ShowFamilyDetails() {
        this.ShowGrandParentDetails()
        this.ShowParentBusiness()
        this.ShowChildName()
    }
}

const ChildObj = new Child("Mohit", "Construction", "DayaRam", "200Acr")
ChildObj.ShowFamilyDetails()