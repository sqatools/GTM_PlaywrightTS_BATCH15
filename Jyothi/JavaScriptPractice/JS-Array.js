//PUSH

var a1=[4,5,6,9]
a1.push(100)
console.log("A1:",a1)


//UNSHIFT
var a1=[4,5,6,9]
a1.unshift(20)
console.log("A1:",a1)


//POP
var a1=[64,15,6,29]
a1.pop()
console.log("A1:",a1)


//SHIFT
var a1=[33,64,15,44,6,29]
a1.shift()
console.log("A1:",a1)

//SPLICE
var str5=["we","are","learning","typescript"]
str5.splice(1,0,"Javascript")
console.log("Array5:",str5)

str5.splice(1,1,"Python")
console.log("Array5:",str5)

str5.splice(1,2,"Java")
console.log("Array5:",str5)

str5.splice(1,2,"scroll", "Jyothi")
console.log("Array5:",str5)