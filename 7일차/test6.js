//콜백 함수
function fetchData(callback) {
    setTimeout(Function(){
        const data = "여기 데이터";
        callback(data);
    }, 1000);
}

fetchData(f);

let f = fetchData(function (data) {
    console.log("데이터 도착 >> ", data);
});


fetchData(function (data) {
    console.log("새로운 데이터 >>", data);
});