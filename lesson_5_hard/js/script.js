function getFriendlyNumbers(start, end) {

  let arr = [];
  if (isNaN(start) || isNaN(end) || start > end || start < 0 || end < 0 || (start ^ 0) !== start || (end ^ 0) !== end) {
    return false;
  }

  for (let i = start; i < end; i++) {
    for (let j = start; j < end; j++) {
      if (isFriendly(i, j) && i !== j) {
        arr.push(i, j);
      }
    }
  }

  arr.sort(sortNumbers);
  alert('Дружественные числа в промежутке от ' + start + ' до ' + end + ': ' + arr);
  return arr;
  console.log(arr);
}

//Вспомогательные функции
function isFriendly(num1, num2) {
  if (num1 > num2) {
    return false;
  } else {
    return getDivisorsSum(num1) == num2 && getDivisorsSum(num2) == num1;
  }
}

function sortNumbers(a, b) {
  return a - b;
}

function getDivisorsSum(num) {
  return getSum(getDivisors(num));
}

function getDivisors(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    if (num % i == 0) {
      arr.push(i);
    }
  }
  return arr;
}

function getSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(getFriendlyNumbers(1, 300));
console.log(getFriendlyNumbers(1.5, 200.9));
console.log(getFriendlyNumbers(2600, 2950));
