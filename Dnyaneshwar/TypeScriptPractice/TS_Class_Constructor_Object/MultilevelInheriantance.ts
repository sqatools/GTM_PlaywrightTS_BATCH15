class Grantparent {

    name:string
    car:string
    home:string

    constructor(name:string,car:string,home:string)
    {
        this.name=name
        this.car=car
        this.home=home
    }

    ShowGrantparent()
    {
        console.log("ShowGrantparent Name: ",this.name)
        console.log("ShowGrantparent Car:",this.car)
        console.log("ShowGrantparent Home",this.home)

    }
}

class parent extends Grantparent{ 

    rowhouse:string

    constructor(name:string,car:string,home:string,rowhouse:string)
    {
        super(name,car,home)
        this.rowhouse=rowhouse
    }
 showparent(){
    console.log("show parent rowhouse:",this.rowhouse)
 }

}

class child extends parent{

    Lapto(){
        console.log("child Properties")
    }
}

var c= new child("lala","Thar","2BHK","big Eow House")

c.ShowGrantparent()
c.showparent()
c.Lapto();

