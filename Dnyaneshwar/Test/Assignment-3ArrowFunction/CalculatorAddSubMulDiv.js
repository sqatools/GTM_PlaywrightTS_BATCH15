
var calculator  =(num1,num2,choice) => {

	switch(choice){

case 1:
    return num1+num2

    case 2:
      return  num1-num2

        case 3:

      return  num1 * num2

        case 4:
          return  num1/num2

            default : 
            return "invalide choice" ;
    }

}

console.log(calculator(10,10,1))
console.log(calculator(10,10,2))
console.log(calculator(10,10,3))
console.log(calculator(10,10,4))
