var array2=[20,30,70,90,56,108]
var maxVal=0
for(var Val of array2){
    if(Val>maxVal){
        maxVal=Val
}else{
    continue
}

}
console.log("Max value=",maxVal)

//---------------------------------------------

var array = [4, 6, 7, 11, 13, 16, 25, 29];

for (var i = 0; i < array.length; i++) {
    var num = array[i];
    var prime = true;

    if (num < 2) {
        prime = false;
    } else {
        for (var j = 2; j <= Math.sqrt(num); j++) {
            if (num % j == 0) {
                prime = false;
                
            }
        }
    }

    if (prime) {
        console.log(num);
    }
}
