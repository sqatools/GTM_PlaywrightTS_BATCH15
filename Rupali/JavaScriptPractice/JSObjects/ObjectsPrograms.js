// find maximum number from object

var objA= {'a':100, 'b':200, 'c':300}
var max = 0;
for(var val in objA){
    if(objA[val]>max){
        max = objA[val]
    }
}
console.log(max)