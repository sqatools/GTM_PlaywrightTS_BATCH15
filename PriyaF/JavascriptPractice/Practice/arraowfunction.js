var prime=(num) =>{


 if (num <= 1) {
        return false;
    }

    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false;
        }
    }

    return true;
}




if (prime(17)) {
    console.log(num + " is a Prime Number");
} else {
    console.log(num + " is Not a Prime Number");
}


