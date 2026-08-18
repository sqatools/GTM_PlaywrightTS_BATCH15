//freeze an object

var Userdetails = {
 name : "rahul",
 city  : "sirsa",
 area  : "huda"
 
}

for(var key in Userdetails){
console.log(key + ":" + Userdetails[key]);

}
Object.freeze(Userdetails)
//Userdetails.name = "Sam";
console.log(Userdetails.name)
