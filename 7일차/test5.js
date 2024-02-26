//콜백 함수

let f = function () {
    console.log("1번");
}

setTimeout(
    f, 10000
);
console.log("-------------------");

function double(num){
    setTimeout(
        function( ){
            const doubleNum = num*2;
            console.log(doubleNum);
        }, 1000
    );
};

double(10);
