var obj1={
    'a':300,
    'b':400,
    'c': 500,
    'd':770
}
var maxvalue={}
for(let key in obj1){
    if(obj1[key]>maxvalue){
        maxvalue=obj1[key]
    }
}

console.log(maxvalue)