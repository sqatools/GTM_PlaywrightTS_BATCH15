// multi level inheritance: when multiple classes are connected to each other in sequence then it is called// multi level inheritance.

// class A -> class B -> class C


class GrandParent{

     GrantParentName :string
     GrandParentProperty:string

    constructor(GPname: string, GPProperty: string)
    {
        this.GrantParentName=GPname
        this.GrandParentProperty=GPProperty
    }
    ShowtheGrandParentDetails(){
        console.log("Grandparent name :", this.GrantParentName)
        console.log("GrandparentProperty:",this.GrandParentProperty)
    }
}
class Parent extends GrandParent {
    ParentBussiness: string
    constructor(PBusiness: string, GPname: string, GPProperty: string) {
        super(GPname, GPProperty)
        this.ParentBussiness = PBusiness
    }

    ShowParentBusiness() {
        console.log("Parent Business :", this.ParentBussiness)
    }
}

class child extends Parent{
      childoccupation:string
      constructor(ChildO:string,PBusiness: string, GPname: string, GPProperty: string){
        super(PBusiness,GPname,GPProperty)
        this.childoccupation=ChildO
      }

      showdchilddetails(){
            console.log("child occupation:",this.childoccupation)
      }
}

const obj= new GrandParent("Vital Rao", "200Acrs","TextileShop")
obj.ShowtheGrandParentDetails()
obj.ShowParentBusiness()