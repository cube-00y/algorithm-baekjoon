const fs = require("fs");

const [inputHours, inputMinutes] = fs.readFileSync("dev/stdin").toString().split(" ").map(Number);

function getMinutes(m) {
    // return: [minus hours, result minutes]
    const result = m - 45;

    if (result >= 0) {
        return [0, result];
    }

    return [1, 60 + result];
}

function getHours(h, amount) {
    const result = h - amount;

    if (result < 0) {
        return 23;
    }

    return result;
}

const [minusHours, resultMinutes] = getMinutes(inputMinutes);
const resultHours = getHours(inputHours, minusHours);

console.log(`${resultHours} ${resultMinutes}`);
