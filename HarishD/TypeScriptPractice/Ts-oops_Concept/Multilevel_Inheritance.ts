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
        console.log("GrandparentName :", this.GrantParentName)
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
      ChildName:string
      constructor(ChildN:string,PBusiness: string, GPname: string, GPProperty: string){
        super(PBusiness,GPname,GPProperty)
        this.ChildName=ChildN
      }

      showdchilddetails(){
            console.log("child NAMe:",this.ChildName)
      }

      showFamilydetail(){
        this.ShowtheGrandParentDetails()
        this.ShowParentBusiness()
        this.showdchilddetails()
      }
}

const obj= new child("Harish","Textile","Vital Rao","200Acrs")
obj.showFamilydetail()
