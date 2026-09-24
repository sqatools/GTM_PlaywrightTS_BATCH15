//write a program to find the max value
var arr2=[20,40,2,30,40.1,true]
    var maxval=0
    for(var val of arr2){
        if(val>maxval){
            maxval=val
        }else{
            continue
        }
    }
    console.log(maxval)

//write a program to shift all postive left side and negtive in right side
var arr=[-1,-2,3,4,-5,0.9]
var output=[]
for(var val of arr){
    if(val>0){
        output.unshift(val)

        } else{
            output.push(val)
        }
    }
console.log(output)\

//program to find out the second max value
var arr=[20,0,0.23,4,34,]
var maxval=0
var secondmax=0
for(var val of arr){
    if(val>maxval){
        secondmax=maxval
        maxval=val
    }else if(val>secondmax && val!=maxval){
        secondmax=val
    }
}
console.log(secondmax)

//wite a program to get value from array whichare prime number
var arr=[11,29,3,4,5,6,7,]
var prime=[]
for(var val of arr){
    var isprime=true
    for(var i=2; i<val; i++){
        if(val%i==0){
            isprime=false
            break
        }
    }
    if(isprime){
        prime.push(val)
    }
}
console.log(prime)

//write a program to get combination of two values who sum is 10
var arr=[4,6,7,12,9,3,-2,8,2,1]
var output=[]
for (var val of arr){
    for(var val2 of arr){
        if(val+val2==10){
            output.push([val,val2])
        }
    }
}
console.log(output)

//write a program to print square od even values and cube of odd values
var arr=[4,7,9,3,6,12,15]
var output=[]
for(var val of arr){
    if(val%2==0){
        output.push(val*val)
        }else{
            output.push(val*val*val)
        }

    }
console.log(output)

//write a program to remove duplicate value
var arr=[7,8,,2,5,7,5,4,8,true,false,true]
var output=[]
for(var val of arr){
    if(!output.includes(val)){
        output.push(val)
    }
    
}
console.log(output)