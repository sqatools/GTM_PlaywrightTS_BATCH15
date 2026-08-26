class supper{

    home()
    {
        console.log("home : supper class")
    }

    bike()
    {
        console.log("bike : supper class")
    } 

a:number
b:number


constructor(a:number,b:number){

    console.log(this.a=a)
    console.log(this.b=b)

}

    
}

class child extends supper{

    

     c:number
     d:number    

     constructor(a:number,b:number,c:number,d:number){
        super(a,b)
        console.log(this.c=c)
        console.log(this.d=d)
     }

    rowhouse()
    {
        console.log("rowhouse: child class")
    }

}


var c= new child(10,20,30,40)
c.bike()
c.home()
c.rowhouse()


