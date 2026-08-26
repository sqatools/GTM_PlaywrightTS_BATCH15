class A{

   m1():void{

    console.log("m1 method implementation")
   }

   m2():void{

    console.log("m2 method implementation")
   }
}


class B extends A{
    m1():void{
        console.log("m1 method implementation in class B")
    }
}

var b=new B()
b.m1()
b.m2()  
