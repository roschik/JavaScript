function getFriendlyNumbers(start, end) {
	for (var i = start; i < end; i++) {
    for (var j = start; j < end; j++) {
      if (isFriendly(i, j) && i !== j) {
        console.log ('Дружественные числа: ' + i + ' и ' + j);
      }
    }
  }
}

function isFriendly(num1, num2) {
  return getDivisorsSum(num1) == num2 && getDivisorsSum(num2) == num1;
}

function getDivisorsSum(num) {
  return getSum(getDivisors(num));
}

function getDivisors(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    if (num % i == 0) {
      arr.push(i);
    }
  }
  return arr;
}

function getSum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
getFriendlyNumbers(1, 300);