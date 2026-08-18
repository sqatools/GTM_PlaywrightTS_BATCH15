//Merge two student objects into one object.

const personal = {
    name: "Rahul",
    age: 21
};

const academic = {
    course: "B.Tech",
    marks: 88
};

var merge = {...personal, ...academic};
console.log(merge);