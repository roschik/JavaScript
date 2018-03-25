let num = 33721;
let arr = String(num).split('');
let result = 1;

for (let i = 0; i < arr.length; i++) {

	result *= arr[i];

}

console.log('Результат умножения чисел: ' + result);
alert('Результат возведения в степень 3: ' + result**3);
