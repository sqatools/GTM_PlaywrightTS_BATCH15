//A company stores employee details in an object. Find the employee who has the highest salary.

const employees = {
    emp1: { name: "John", salary: 55000 },
    emp2: { name: "Alice", salary: 72000 },
    emp3: { name: "David", salary: 68000 }
};

var highest =0
var topemployee =null

for(var key in employees){
    if(employees[key].salary>highest){
        highest=employees[key].salary
        topemployee = employees[key]

    }

}
console.log("Highest salary is :", topemployee)