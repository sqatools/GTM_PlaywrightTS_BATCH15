var Prime = (num) => {
    if (num <= 1) {
        return `${num} is not a Prime Number`;
    }

    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return `${num} is not a Prime Number`;
        }
    }

    return `${num} is a Prime Number`;
};

console.log(Prime(17));
console.log(Prime(18));