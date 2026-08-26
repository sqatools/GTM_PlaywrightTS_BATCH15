class employee{

    private name:string;
    private address : string;

constructor()
{
    this.name=""
    this.address=""
}

    getName():string
    {
        return this.name
    }
    setName(name:string)
    {
        this.name=name
    }

    getaddress():string
    {
        return this.address
    }
    setaddress(address:string)
    {
this.address=address
    }
}

//let emp = new employee("dnyaneshwar","pune");

let emp = new employee();


emp.setName("Dnyaneshwar");
emp.setaddress("Mumbai");

console.log(emp.getName());
console.log(emp.getaddress());