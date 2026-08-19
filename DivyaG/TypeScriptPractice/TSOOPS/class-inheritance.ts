//Inheritance: One class connected to other using Inheritance.
//This is single inheritance

class ABC{
    a1:number =3
    b1:number =4

    constructor(n1:number,n2:number){
        this.a1=n1
        this.b1=n2
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

    showAllDetails(){
        console.log(this.p1)
        console.log(this.p2)
        console.log(this.a1)
        console.log(this.b1)
    }
}
const obj5 = new PQR(3,4,30,40)
obj5.showAllDetails()
/* 3
4
30
40 */
//a1 and b1 taking values as 30 and 40 instead of 3 and 4