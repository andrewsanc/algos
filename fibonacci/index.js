function fib(n) { // Basic Recursion
  if (n === 2) {
    return 1;
  }
  else if (n === 1) {
    return 0;
  }
  return fib(n-1) + fib(n-2);
}

console.log(fib(5)); // 3
console.log(fib(7)); // 8
console.log(fib(10)); // 34
console.log(fib(17)); // 987
console.log();

function fibWithTab(n) { // Fib with tabulation
  let tab = [0,1];
  for (let i=2; i<=n; i++) {
      tab.push(tab[i-1] + tab[i-2]);
  }
  return tab[n];
}

console.log(fibWithTab(5)); // 3
console.log(fibWithTab(7)); // 8
console.log(fibWithTab(10)); // 34
console.log(fibWithTab(17)); // 987
console.log();

function fibWithMemoize(n, memo={1:0, 2:1}) {
  if (n in memo) {
    return memo[n];
  } else {
    memo[n] = fibWithMemoize(n-1, memo) + fibWithMemoize(n-2, memo);
    return memo[n];
  }
}

console.log(fibWithMemoize(5)); // 3
console.log(fibWithMemoize(7)); // 8
console.log(fibWithMemoize(10)); // 34
console.log(fibWithMemoize(17)); // 987
console.log();