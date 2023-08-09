// For example:
// solution(4) 
// returns 2: 
// 4 -> 2 -> 1

// solution(15) 
// returns 5: 
// 15 -> 16 -> 8 -> 4 -> 2 -> 1

function solution(n) {
  n = BigInt(n);
  let  operations = 0;
  // O(logN)
  // O(1)
  while (n > 1n) {
    if(n % 2n === 0n){
      n /= 2n;
    } else{
      if ((n - 1n) % 4n === 0n || n === 3n) {
        n -= 1n;
      } else {
        n += 1n;
      }
    }
    operations++;
  }
  return operations.toString();
}

console.log(solution(4));
console.log(solution(15));

  