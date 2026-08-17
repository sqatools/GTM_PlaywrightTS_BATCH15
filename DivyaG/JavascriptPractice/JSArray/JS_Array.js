//Array fundamentals
/*Array can contain any type of data.
//Array is a mutable data type,we can update value any time
//It follows indexing like string*/

var arr1 =[34, 'Hello', 4.5, 4565, [4,5,6], {a:123, b: 456}, true, false]
           // 0    1       2    3      4        5                6    7
           //get array value using indexing
           console.log(arr1[0])
           console.log(arr1[4])
           console.log(arr1[4][1])
           console.log(arr1[5])
           console.log(arr1[5]['a'])
//get each value of an array using loop
var arr3 = [5,6,7,8,9]
for(var val of arr3){
    console.log(val)//5,6,7,8,9
}

//Apply loop and get index of each value in the array
var arr3 = [5,6,7,8,9]
for(var i in arr3){
    console.log(i,arr3[i])//0,1,2,3,4
}

//Push:This method helps to push data at the end of the array
var arr1 = [5,7,9]
arr1.push(100)
console.log(arr1)//5,7,9,100

//more than 1 value to push
arr1.push(33, 44, 55)//[5,7,9,100,33,44,55]
console.log(arr1)


//unshift:help to add at the beginning of an array
var arr1 = [5,6,7]
arr1.unshift(123)
console.log(arr1)//123,5,6,7

//pop method:this method remove value from end of the array and return it
var arr1 = [5,7,9,10]
var removed_value = arr1.pop()
console.log("removed value:",removed_value)//10
console.log(arr1)//5,7,9

//shift:will remove data from beginning of an array
var s4 = [5, 7, 9,10]
var val = s4.shift()
console.log("Removed value:",val)//5
console.log(s4)//7,9,10

//splice method: this method requires three parameters
//1.Index value, 2.delete count, 3.new values to add
//splice(index; deletecount; show output)

var str5 = ["we", "are", "learning", "typescript"]

str5.splice(1, 0, "JavaScript")//not deleting are
console.log(str5)//[ 'we', 'JavaScript', 'are', 'learning', 'typescript' ]

str5.splice(1,1,"Python")//Deleting 1 position
console.log(str5)//[ 'we', 'Python', 'are', 'learning', 'typescript' ]

<<<<<<< HEAD
//add JAVA at index 1 and remove 2 values from that position.
str5.splice(1,2,"JAVA")//Deleting 2 positions
console.log(str5)//[ 'we', 'JAVA', 'learning', 'typescript' ]
=======
//add JAVA at index 1 and remove 2 values from that position
str5.splice(1,2,"JAVA")//Deleting 2 positions
console.log(str5)//[ 'we', 'JAVA', 'learning', 'typescript' ]

var arrA=[5,6,7,2,4,12,56]
//Add 3 value at index 3 and remove 1 value
arrA.splice(3,1,200,100,'Hello')
console.log(arrA)//[ 5, 6, 7, 200, 100, 'Hello', 4, 12, 56 ]

var arrA=[5,6,7,2,4,12,56]
//Add 3 value at index 3 and remove 1 value
arrA.splice(2,3,500,700,'Javascript')
console.log(arrA)//[ 5, 6, 500, 700, 'Javascript', 12, 56 ]

var arrB =[5,7,8,2,4,15]
var out = arrB.pop()*100
console.log(out)//1500

//foreach loop:Iterate through each value of array.
var arrC=[5,7,8,2,34]
arrC.forEach((item) => console.log(item,item**2))
/*
5 25
7 49
8 64
2 4
34 1156
*/

//slice method: It will return sub array from target array
//slice(start index,end index)
//output will include start index and end index
var arrD = ['John', 'Jack','Frank',3,5,6,7]
console.log(arrD.slice(1,5))//[ 'Jack', 'Frank', 3, 5 ]
console.log(arrD)//[ 'John', 'Jack', 'Frank', 3, 5, 6, 7 ]

var arrD = ['John', 'Jack','Frank',3,3,6,7]
console.log(arrD.slice(1,4))//[ 'Jack', 'Frank', 3 ]
console.log(arrD)//[ 'John', 'Jack', 'Frank', 3, 5, 6, 7 ]

//include method: It will return true or false if value is available
var a1 = [5,7,8,23,25]
console.log(a1.includes(23))//true
console.log(a1.includes(2))//false
console.log(a1.includes(8))//true

//sort of array.default it is in acending order
var S1 = [15,6,7,8,23,45,2]
var out = S1.sort((a,b) => a-b)
console.log(out)//[2,  6,  7, 8,15, 23, 45]


//sort array in desc order
var S1 = [15,6,7,8,23,45,2]
var out = S1.sort((a,b) => b-a)
console.log(out)//[45, 23, 15, 8,7,  6,  2]

//reverse methood
var arrT = [5,6,2,7,12,45]
var output = arrT.reverse()
console.log(output)//[ 45, 12, 7, 2, 6, 5 ]

var arrU = [50,6,20,7,12,45]
var result=[]
for(var val of arrU){
    console.log(result)
result.unshift(val)
}
console.log(result)
/*[]
[ 50 ]
[ 6, 50 ]
[ 20, 6, 50 ]
[ 7, 20, 6, 50 ]
[ 12, 7, 20, 6, 50 ]
[ 45, 12, 7, 20, 6, 50 ]*/

//join method: this method joins the values
var Users = ["Rahul", "Rohit", "Roman", "Raghav"]
var result = Users.join(" ")
console.log(result)

//Practice all array methods
>>>>>>> 29f1427e4589fa5f687a83686ce8c5ab90612950
