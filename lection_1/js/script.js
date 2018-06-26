function getSimple(min, max) {
	let arr = [];
	for (let i = min; i <= max; i++) {
		if (isSimple(i)) {
			arr.push(i);
		}
	}

	for (let j = 0; j < arr.length; j++) {
		console.log(`Делители числа ${arr[j]}: 1 и ${arr[j]}`);
	}
	console.log(arr);
	return arr;
}

function isSimple(num) {
	for (let i = 1; i < num; i++) {
		if (num % i === 0 && i !== 1) {
			return false;
		}
	}
	return true;
}

getSimple(2, 200);