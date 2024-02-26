let studentScore = {
    koreaScore: 90,
    englishScore: 80,
    mathScore: 99
};
console.log(studentScore.koreaScore);
console.log(studentScore.englishScore);
console.log(studentScore.mathScore);
console.log("-------------------");
let a = 10;
let b = '10';

console.log(typeof a);
console.log(typeof b);
console.log(a == b);
console.log(a === b);

console.log(a + b);
console.log(a + Number(b));
console.log(String(a) + b);
console.log("-------------------");

let c = [10, 20, 30, 40, "kor", "eng"];
console.log(c);

for (let a in c)
    console.log(a);

let d = {
    a: 10,
    b: 20,
    c: 30,
};

for (let a in d)
    console.log(d[a]);

console.log("-------------------");

function fun1(n) {
    for (let i = 0; i < n; i++)
        console.log(i);
}
fun1(3);

console.log("-------------------");

let funct = function fun2(n) {
    for (let i = 0; i < n; i++)
        console.log(i * 2);
}
funct(3);

console.log("-------------------");

let funct2 = function (n) {
    let sum = 0;
    for (let i = 1; i <= n; i++)
        sum += i;
    return sum;
}
let total = funct2(3);
console.log("합 : " + total);

console.log("-------------------");

let funct3 = function (n) {
    let sum = 0;
    for (let i = 1; i <= n; i++)
        sum += i;
    return sum;
}

let sum = funct3(100);
console.log(sum);

console.log("-------------------");

let f = () => console.log("++++++++++");
f();
let f2 = () =>
    console.log("-------------");
f2();

const person = {
    name : {firstName:"길동", lastName: "홍"},
    age : 29,
    address : "경기도"
};
console.log(person.name.firstName);
console.log(person.name['firstName']);

person.gender="남";

person.age=59
person.name.lastName="김";

delete person.gender;

console.log(person)

console.log("-------------------");

let test = [10, 20, 30, 40, 50];
console.log(test);

test.unshift(60);
console.log(test);

test.shift();
console.log(test);