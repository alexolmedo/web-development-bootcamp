// Given a list of numbers, return the sum of all the even numbers in the list.
const sumEvenNumbers = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0)
      sum += arr[i];
  }
  return sum;
}
