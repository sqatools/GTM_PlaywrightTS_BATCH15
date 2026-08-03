// write a program to get value from array whch are prime


var input = [12,32,44,35,42,66,11]

for (var no of input) {
    var isPrime = true;

    if (no < 2) {
        isPrime = false;
    } else {
        for (var i = 2; i < no; i++) {
            if (no % i == 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        console.log(no);
    }
}