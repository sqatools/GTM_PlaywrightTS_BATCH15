// polymorphism:


class ABC{
    a1:number =3
    b1:number =4

    constructor(n1:number,n2:number){
        this.a1=n1
        this.b1=n2
    }
    addition(){
        console.log(this.a1+this.b1)
    }
}

class PQR extends ABC{

    p1:number 
    p2:number
    constructor(m1:number,m2:number,n1:number,n2:number){
        // super keyword calls the parent class constructor and passes the values to it
        super(n1,n2)
        this.p1=m1
        this.p2=m2
    }

  addition(){
    console.log(this.p1+this.p2)
  }

  /* multiplication(n1:number, n2:number,n3:number){
    console.log(n1*n2*n3)
 }

 multiplication(n1:number,n2:number){
    console.log(n1*n2) */
 }
    }

const obj5 = new PQR(3,4,30,40)
obj5.addition()