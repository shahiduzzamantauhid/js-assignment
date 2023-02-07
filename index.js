//problem 1
function mindGame(num) {
  if (typeof num !== "number") {
    return "Input must be a number";
  }
  return (num * 3 + 10) / 2 - 5;
}


//problem 2
function evenOdd(name) {
  if (typeof name !== "string") {
    return "Input must be a string.";
  }
  let nameLength = name.length;
  if (nameLength % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}


//problem 3
function isLGSeven(num) {
  if (typeof num !== "number") {
    return "It should be a number"
  }
  let difference = num - 7;

  if (difference < 7) {
    return difference
  }
  else {
    return difference * 2
  }
}


//problem 4
function findingBadData(arr) {
  if (typeof arr !== "object") {
    return "It should be an array"
  }
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let values = arr[i]
    if (values < 0) {
      count++
    }
  }
  return count
}


//problem-5 
function gemsToDiamond(num1, num2, num3) {
  if (typeof num1 !== "number" && typeof num2 !== "number" && typeof num3 !== "number") {
    return "Input must be a  number.";
  }
  let firstFriend = num1 * 21
  let secondFriend = num2 * 32
  let thirdFriend = num3 * 43
  let total = firstFriend + secondFriend + thirdFriend
  if (total > 1000 * 2) {
    return total - 2000
  }
  else {
    return total
  }
}
