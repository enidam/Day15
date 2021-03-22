

const sum = (num1, num2 = 1) => {
    const sum = num1 + num2;

    return sum;

};
console.log(sum(4, 6));
console.log(sum(3));
module.exports = sum;