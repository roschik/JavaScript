function getFriendlyNumbers(start, end) {
    let arr = [];
    if (isNaN(start) || isNaN(end) || start > end || start < 0 || end < 0 || (start ^ 0) !== start || (end ^ 0) !== end) {
      return false;
    }

    for (let i = start; i <= end; i++) {
      for (let j = i; j <= end; j++) {
        if (i < j && i !== j && getSum(getDivisors(i)) == j && getSum(getDivisors(j)) == i) {
          arr.push([i, j]);
        }
      }
    }

    arr.sort(function(a, b){
    	return a - b;
    });
    return arr;
    console.log(arr);

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
}

module.exports = {
    firstName: 'Marina',
    secondName: 'Roschik',
    task: getFriendlyNumbers
}