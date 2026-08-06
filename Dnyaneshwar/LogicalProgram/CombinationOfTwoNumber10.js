var array2 = [4, 6, 7, 12, 4, 6, 7, -2];

for (var i = 0; i < array2.length; i++) {

    for (var j = i + 1; j < array2.length; j++) {

        if (array2[i] + array2[j] == 10) {

            console.log(array2[i] + " + " + array2[j] + " = 10");
        }
    }
}