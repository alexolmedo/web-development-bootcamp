console.log("PRINTING ALL NUMBERS BETWEEN -10 AND 20");

for (var i = -10; i < 20; i++) {
    console.log(i)
}

console.log("PRINTING ALL EVEN BETWEEN 10 AND 40");
for (var i = 10; i < 40; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

console.log("PRINTING ALL THE ODD NUMBERS BETWEEN 300 AND 333");
for (var i = 300; i < 333; i++) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}

console.log("PRINTING ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50");
for (var i = 5; i < 50; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log(i)
    }
}