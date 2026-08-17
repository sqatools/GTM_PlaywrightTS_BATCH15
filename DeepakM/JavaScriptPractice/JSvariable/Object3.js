//Print all keys and values from an object.

const student = {
    name: "Deepak",
    marks: 80,
    grade: "B",
    Rollno: 22
};

for (let key in student) {
    console.log(key + " : " + student[key]);
    //console.log(student)
}

//Check whether a key exists in object
var objA = {
     name : "Deepak",
     stanard : "first",
     rollno : 20

}

console.log('name' in objA)

//convert object to array
console.log(Object.entries(objA))

//convert array to object

var test = [ [ 'name', 'Deepak' ], [ 'stanard', 'first' ], [ 'rollno', 20 ]] 

console.log(Object.fromEntries(test))

//