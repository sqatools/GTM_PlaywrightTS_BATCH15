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

str5.splice(1,2,"JAVA")//Deleting 2 positions
console.log(str5)//[ 'we', 'JAVA', 'learning', 'typescript' ]
