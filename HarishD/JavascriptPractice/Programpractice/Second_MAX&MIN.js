var array = [4, 6, 7, 11, 13, 116, 25, 29];

var max = array[0];
var secondMax = array[0];

for (var i = 0; i < array.length; i++) {

    if (array[i] > max) {      //4>0 = True|   6>4= true | 7>6=true |11>7=true|13>11=true|116>13=true|25>116=false
        secondMax = max;        //4  |   second max=4  | secondmax=6|second max=7|secondmax=11|13|
        max = array[i];         //4  |  max =6  | max=7| max=11|max=13|116
    }

    else if (array[i] > secondMax && array[i] != max)  //25>13 && 25!=116 |29>25 && 29!=116
        secondMax = array[i]      //25  |29  
}

console.log("Max number is :", max);
console.log("Second Max number is :", secondMax);

console.log("########################")

var array2 = [25, 27, 18, 2, 10, 14, 5, 15,]
var min = array2[0]
var secondmin = array2[0]

for (var i = 0; i < array2.length; i++) {
    if (array2[i] < min){
        secondmin = min
         min = array2[i]
    }
    else if(array2[i]< secondmin && array2[i]!=min) 
        secondmin= array2[i]
}
console.log("min number is :", min);
console.log("Second mi number is :",secondmin );

