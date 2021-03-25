/**
 *Implementation of Heap's algorithm
 */

function permute(permutation) {
  let length = permutation.length;
  let result = [permutation.slice()];
  let c = new Array(length).fill(0);
  let i = 1;
  let k;
  let p;

  while (i < length) {
    if (c[i] < i) {
      k = i % 2 && c[i];
      p = permutation[i];
      permutation[i] = permutation[k];
      permutation[k] = p;
      ++c[i];
      i = 1;
      result.push(permutation.slice());
    } else {
      c[i] = 0;
      ++i;
    }
  }
  return result;
}
/**
 * The following is the function where the solution shall be written
 */

function solution(input) {
  let inputChars = input.split("");
  let filtered = inputChars.filter((char) => {
    return typeof parseInt(char) === "number" && !isNaN(parseInt(char));
  });
  if (filtered.length < 1) {
    return "Input should include at least one digit";
  }
  let sorted = permute(filtered).sort().reverse();
  return sorted.map((arr) => arr.join("")).join();
}

// some example inputs
console.log(solution("326")); // expected ouput 632,623,362,326,263,236
console.log(solution("A 3B2 C6D")); // expected ouput 632,623,362,326,263,236
