const check = (num) => {
    if (num < 0){
        console.log(`Отрицательное`)
    }else console.log(`Неотрицательное`)
}

function StrLen(str) {
    console.log(`Длина строки:${str.length}`);
}

function Last(str) {
    if (str.length > 0) {
        console.log(`Последний символ:"${[str.length - 1]}"`);
    } else {
        console.log(None);
    }
}

function check2(number) {
    if (number % 2 === 0) {
        console.log(`Четное`);
    } else {
        console.log(`Нечетное`);
    }
}

function check3(word1, word2) {
    if (word1[0].toLowerCase() === word2[0].toLowerCase()) {
        console.log(`Первые буквы совпадают`);
    } else {
            console.log(`Первые буквы не совпадают`);
    }
}

function LastChar(str) {
    if (str.length > 1) {
        console.log(`${str[str.length - 2]}`);
    } else {
        console.log(None);
    }
}

function check4(num1, num2) {
    if (num2 === 0) {
        console.log(None);
    } else if (num1 % num2 === 0) {
        console.log("Делится без остатка");
    } else {
        console.log("Не делится без остатка");
    }
}

for (let i = 1; i <= 100; i++) {
    console.log(i);
}

for (let i = 100; i >= 1; i--) {
    console.log(i);
}

const str = "abcde";
const lettersArray = str.split("");
console.log(lettersArray);

const num = 12345;
const digitsArray = num.toString().split("").map(Number);
console.log(digitsArray);

const rev = Number(number.toString().split('').reverse().join(''));
console.log(rev)

const arr = [];
for (let i = 1; i <= 10; i++) {
    arr.push(i);
}

const arr2 = [];
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        arr2.push(i);
    }
}