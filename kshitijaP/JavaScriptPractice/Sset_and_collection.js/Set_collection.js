//set in an in bulid collection object, that mentian unquie value
//duplicate data is not allowed
//if we provide duplicate value it will ignore

const SetValue=new Set(['ram','shyam','hari','gita','sita'])
console.log(SetValue)
//add valuein set
SetValue.add('Sumeet')
console.log(SetValue)
//delete value form set
SetValue.delete('ram')
console.log(SetValue)

//check given data is avilable or not
console.log("has ram is available :",SetValue.has('ram'))

//clear all data from set
// SetValue.clear()
// console.log(SetValue)

//