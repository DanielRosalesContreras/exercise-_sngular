const isPrime = (x) => {
  var isPrime = true;
  for (var d = 2; d <= Math.sqrt(x); d++) {
    if((x/d) % 1 == 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
}

const fibonacci = (n) => {
  const series = [1, 1];
  for (let i = 2; i < n; i++) {
     const a = series[i - 1];
     const b = series[i - 2];
     series.push(a + b);
  };
  return series[n - 1];
}

const triangular = (n) => {
  let result = '';
  result = (n*(n+1))/2
  return result;
}

const prime = (n) => {
  var p = 0;
  for (var i = 1; 0 <= n; i++) {
    if(isPrime(i)) {
      p = i; n--;
    }
    if(3 <= i){
      i++;
    }
  }
  return p;
}

module.exports = function form(n) {
  console.log("p", prime(parseInt(n)+3));
  console.log("t", triangular(parseInt(n)-1));
  console.log("f", fibonacci(parseInt(n)-2));
  console.log((prime(parseInt(n)+3)*triangular(parseInt(n)-1))/fibonacci(parseInt(n)-2));
  return (prime(parseInt(n)+3)*triangular(parseInt(n)-1))/fibonacci(parseInt(n)-2)
}
