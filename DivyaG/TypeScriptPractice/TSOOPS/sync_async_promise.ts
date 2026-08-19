//sync behaviour

console.log("Step1: start of the program")
console.log("Step2:Executing the program")
console.log("Step3:End of the program")
/* Step1: start of the program
Step2:Executing the program
Step3:End of the program */

//async behaviour

console.log("Step1: start of the program")
setTimeout(() =>{
    console.log("Step 2:")
},3000)
console.log("Step3")
/* Step1: start of the program
Step3
Step 2: */