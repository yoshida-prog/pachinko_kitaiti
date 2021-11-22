const sikou = 1000;
const ninzu = 12;
const array = [
    40000,
    20000,
    5000,
    3000,
    2000,
    -2000,
    -3000,
    -5000,
    -10000,
    -20000
];
const arraySum = array.reduce((sum, element) => {
    return sum + element;
}, 0);
const kitaiti = arraySum / array.length;
const randomNum = (array) => {
    return array[Math.floor(Math.random() * array.length)];
};

console.log('---------------------------------------------');
console.log('1回あたりの期待値: ' + kitaiti + ' 円');
console.log('試行回数: ' + sikou + ' 回');
console.log('期待値合計: ' + (kitaiti * sikou) + ' 円');
console.log('---------------------------------------------');
for (let x=0; x<ninzu; x++) {
    let sum = 0;
    for (let i=1; i<=sikou; i++) {
        sum = sum + randomNum(array);
        if (i === 100 || i === 500 || i === 1000) {
            console.log(i + ' 回目までの収支: ' + sum + ' 円');
        }
    };
    console.log('---------------------------------------------');
}
