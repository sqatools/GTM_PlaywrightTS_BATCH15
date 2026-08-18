
 var object2 = {
    name : "Rahul",
    age : 25,
    email : 'rahul@gmail.com',
    phone: 678687678,
    hobbies : { game: 'cricket', music: 'rocking songs', food: 'healthy food'},
    precitis : ['Pune', 'Bangalore', 'Mumbai'],
    hello() { return console.log("Hello World")},
    v1 : 4.5,
    married : true,
    age: 35
}

// console.log(object2)
// console.log(Object.keys(object2))
// console.log(Object.values(object2))
console.log(Object.entries(object2))

//A company stores employee details in an object. Find the employee who has the highest salary.

const employees = {
    emp1: { name: "John", salary: 55000 },
    emp2: { name: "Alice", salary: 72000 },
    emp3: { name: "David", salary: 68000 }
}
var highestSal = 0
var highestEmp = ""

for (var key in employees) {
    if(employees[key].salary > highestSal) {
        highestSal = employees[key].salary
        highestEmp = employees[key].name
    }
}
   console.log("highest Salary is :",highestSal, "earned by : ", highestEmp)

//An online shopping website stores products with categories. Count how many products belong to each category.

const products = {
    p1: { category: "Electronics" },
    p2: { category: "Furniture" },
    p3: { category: "Electronics" },
    p4: { category: "Books" },
    p5: { category: "Books" }
}
var count = 0
var categoryCount = {}
var MFchar = ""

// for (let key in products) {
//     const cat = products[key].category
//     if(Object.hasOwn(categoryCount, cat)) {
//         categoryCount[cat] += 1
//          if (categoryCount[cat] >= count) {
//             count = categoryCount[cat]
//             MFchar = cat
//         }
//     } else {
//         categoryCount[cat] = 1
//     }
// }
// console.log(categoryCount)
// console.log("Max frequency character :", MFchar, count)


for (let key in products) {
    const cat = products[key].category
    categoryCount[cat] = (categoryCount[cat] || 0) + 1;

}
console.log(categoryCount)

//Merge two student objects into one object
const personal = {
    name: "Rahul",
    age: 21
}

const academic = {
    course: "B.Tech",
    marks: 88
}
console.log(Object.assign(personal, academic))

const merged = {...personal, ...academic}
console.log(merged)

//Check whether every employee object contains an email property
const employees = {
    emp1: {
        name: "John",
        email: "john@test.com"
    },
    emp2: {
        name: "Alice"
    },
    emp3: {
        name: "David",
        email: "david@test.com"
    }
} 
console.log(Object.entries(employees).filter(([key, emp])=> emp.email == null))

// for (var key in employees) {
//     if(employees[key].email == null) {
//         console.log(employees[key].name)
//     }
// }

for (var key in employees) {
    const emp = employees[key]
    if(Object.hasOwn(emp, "email")) {
       continue
    } else {
        console.log(employees[key].name)
    }
}

//Calculate the total bill of all products in the shopping cart.

const cart = {
    item1: {
        name: "Mouse",
        price: 700,
        quantity: 2
    },
    item2: {
        name: "Keyboard",
        price: 1200,
        quantity: 1
    },
    item3: {
        name: "Monitor",
        price: 9500,
        quantity: 1
    }
}
var bill = 0
for ( var key in cart) {
    var item = cart[key]
    bill = bill + cart[key].price*cart[key].quantity
}
console.log(bill)

//Remove all properties whose value is null.
const user = {
    name: "Deepesh",
    phone: null,
    city: "Bhopal",
    email: null,
    age: 30
}
const Obj = Object.fromEntries(
Object.entries(user).filter(([key, value]) => value !== null)
)
console.log(Obj)
// Object.entries(user).filter(([key,value]) => value!==null ).forEach(([name, value])=>console.log(`${name} : ${value}`))


//Identify duplicate values present in an object.

const students = {
    s1: "A",
    s2: "B",
    s3: "A",
    s4: "C",
    s5: "B",
    s6: "A"
}
var stu = {}
var count = 0
for (let key in students) {
var s = students[key]
    if(Object.hasOwn(stu, s)) {
        stu[s] += 1
    } else {
        stu[s] = 1
    }
    if(stu[s] > count) {
        count = stu[s]
    }
}
console.log(stu)
console.log(count)
console.log(Object.entries(stu).filter(([key, value]) => value>1).map(([value]) => value))

//Convert the object values into an array and sort them in ascending order.

const marks = {
    maths: 78,
    science: 91,
    english: 65,
    computer: 99
}
console.log(Object.entries(marks).map(([, value]) => value).sort((a,b)=> a - b))
console.log(Object.values(marks).sort((a, b) => a - b))

//Update the city of the employee to Mumbai
const employee = {
    id: 101,
    name: "John",
    address: {
        city: "Delhi",
        state: "Delhi"
    }
}
employee.address.city = "Mumbai"
console.log(employee)

//Calculate the average salary of all employees.
const employees = {
    emp1: { salary: 45000 },
    emp2: { salary: 60000 },
    emp3: { salary: 75000 },
    emp4: { salary: 50000 }
}
var sal = 0
var avg = 0
var len = Object.keys(employees).length

for (let key in employees) {
    var emp = employees[key]
    sal += emp.salary
}
avg = sal/len
console.log(avg)

//Display all products whose quantity is less than 5.
const inventory = {
    p1: { name: "Laptop", quantity: 3 },
    p2: { name: "Keyboard", quantity: 8 },
    p3: { name: "Mouse", quantity: 2 },
    p4: { name: "Monitor", quantity: 10 }
} 
Object.values(inventory)
        .filter(p => p.quantity < 5)
        .forEach((p => console.log(`${p.name}: ${p.quantity} left`)))

// for (let key in inventory) {
//     var p = inventory[key]
//     if(p.quantity < 5) {
//         console.log(p.name)
//     }
// }


//Group employees based on department.

const employees = {
    emp1: { name: "John", department: "IT" },
    emp2: { name: "Alice", department: "HR" },
    emp3: { name: "David", department: "IT" },
    emp4: { name: "Emma", department: "Finance" }
}

//Find the product with the highest price.

const products = {
    p1: { name: "Phone", price: 25000 },
    p2: { name: "Laptop", price: 65000 },
    p3: { name: "Watch", price: 12000 }
}

//Count how many properties have true and false values.

const permissions = {
    read: true,
    write: false,
    delete: true,
    update: false,
    share: true
}

//Swap the keys and values of an object

const countryCodes = {
    India: "IN",
    America: "US",
    Japan: "JP"
}

//A company stores employee joining years. Display the employees who joined after 2022.

const employees = {
    emp1: { name: "John", joiningYear: 2021 },
    emp2: { name: "Alice", joiningYear: 2023 },
    emp3: { name: "David", joiningYear: 2024 },
    emp4: { name: "Emma", joiningYear: 2022 }
}

//An e-commerce application increases all product prices by 10%.

const products = {
    p1: { name: "Laptop", price: 50000 },
    p2: { name: "Mouse", price: 800 },
    p3: { name: "Keyboard", price: 1500 }
}

//Display only customers whose membership type is Premium.

const customers = {
    c1: { name: "Rahul", membership: "Premium" },
    c2: { name: "Amit", membership: "Regular" },
    c3: { name: "Neha", membership: "Premium" },
    c4: { name: "Priya", membership: "Regular" }
}

//Count how many users are active and inactive.

const users = {
    u1: { name: "John", active: true },
    u2: { name: "Alice", active: false },
    u3: { name: "David", active: true },
    u4: { name: "Emma", active: true }
}

//Find the employee with the maximum age.

const employees = {
    emp1: { name: "John", age: 30 },
    emp2: { name: "Alice", age: 42 },
    emp3: { name: "David", age: 38 },
    emp4: { name: "Emma", age: 27 }
}

//Calculate total, average, percentage, and grade for each student.

const students = {
    s1: {
        name: "Rahul",
        maths: 90,
        science: 85,
        english: 88
    },
    s2: {
        name: "Priya",
        maths: 75,
        science: 80,
        english: 70
    }
}

//Identify duplicate email addresses stored in employee records.

const employees = {
    emp1: { email: "john@test.com" },
    emp2: { email: "alice@test.com" },
    emp3: { email: "john@test.com" },
    emp4: { email: "emma@test.com" }
}

//Display employees in ascending order of salary.

const employees = {
    emp1: { name: "John", salary: 65000 },
    emp2: { name: "Alice", salary: 48000 },
    emp3: { name: "David", salary: 72000 },
    emp4: { name: "Emma", salary: 55000 }
}

//Calculate inventory value using price × quantity.

const inventory = {
    p1: { name: "Laptop", price: 50000, quantity: 4 },
    p2: { name: "Mouse", price: 800, quantity: 15 },
    p3: { name: "Keyboard", price: 1500, quantity: 10 }
}
var total = 0
for (let key in inventory) {
    var p = inventory[key]
    total += p.price*p.quantity
}
console.log(`Total inventory is ${total}`)

//Display employees having more than two skills.

const employees = {
    emp1: {
        name: "John",
        skills: ["JavaScript", "React"]
    },
    emp2: {
        name: "Alice",
        skills: ["Java", "Spring", "Docker"]
    },
    emp3: {
        name: "David",
        skills: ["Python", "Django", "AWS", "Docker"]
    }
}

//Convert employee objects into a formatted directory

const employees = {
    emp1: {
        name: "John",
        phone: "9876543210"
    },
    emp2: {
        name: "Alice",
        phone: "9876500000"
    }
}

//Display products priced above the average price.

const products = {
    p1: { name: "Laptop", price: 60000 },
    p2: { name: "Mouse", price: 900 },
    p3: { name: "Keyboard", price: 2000 },
    p4: { name: "Monitor", price: 18000 }
}
var len = Object.keys(products).length

var total = 0
var avg = 0
for (let key in products) {
    total += products[key].price
}

avg = total/len

for (let key in products) {
    if (products[key].price > avg) {
        console.log(`${products[key].name} is above average price`)
    }
}

//Find employees whose records are missing mandatory fields such as name, email, or department.

const employees = {
    emp1: {
        name: "John",
        email: "john@test.com",
        department: "IT"
    },
    emp2: {
        name: "Alice",
        department: "HR"
    },
    emp3: {
        email: "david@test.com",
        department: "Finance"
    }
}

//Compare two employee objects and identify differing properties.

const employee1 = {
    id: 101,
    name: "John",
    salary: 50000
};

const employee2 = {
    id: 101,
    name: "John",
    salary: 60000
}


//Calculate sales statistics for different regions.

const sales = {
    north: 250000,
    south: 180000,
    east: 320000,
    west: 210000
}
 var TotalSales = 0
 var highest = 0
 var highestRegion = ""
 var lowest = Infinity
 var len = Object.keys(sales).length

for ( let key in sales) {
   TotalSales += sales[key]

   if ( sales[key] > highest) {
        highest = sales[key]
        highestRegion = key
   } 
   if(sales[key] < lowest) {
     lowest = sales[key]
    var lowestRegion = key
   }

}
var avgSales = TotalSales/len

console.log("Total Sales is :", TotalSales)
console.log("Average Sales is :", avgSales)
console.log(`Highest Sales is ${highest} in Region ${highestRegion}`)
console.log(`Highest Sales is ${lowest} in Region ${lowestRegion}`)