// Calculate sum of numeric values in object

const marks = {
    english : 98,
    math : 37,
    Hindi :90,
    Science : 67
}

var totalmarks =0

for(var key in marks){
    totalmarks =totalmarks+marks[key]

}
console.log(totalmarks)