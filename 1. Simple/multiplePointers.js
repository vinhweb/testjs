// one pointer
export function sumZero(arr){
  for (let i = 0; i < arr.length; i++){
    for(let j = i+1; j < arr.length; j++){
      if(arr[i] + arr[j] === 0){
        return [arr[i], arr[j]];
      }
    }
  }
}

// two pointer
export function sumZeroRefactor(arr){
  let left = 0;
  let right = arr.length - 1;
  while (left < right){
    let sum = arr[left] + arr[right];
    if(sum === 0){
      return [arr[left], arr[right]];
    }else if(sum>0){
      right--;
    }else{
      left++;
    }
  }
}

// console.log(
//   sumZero([-6,-4,-2,-1,-0,1,3,4,7]),
//   sumZeroRefactor([-6,-4,-2,-1,-0,1,3,4,7]),
// )


// two pointers
export function countUniqueValues(arr){
  if(arr.length === 0) return 0;

  let pointer = 0;

  for (let i = 0; i < arr.length; i++){
    if (arr[i] !== arr[pointer]){
      pointer++;
      arr[pointer] = arr[i];
    }
  }
  return pointer + 1;
}

// console.log(
//   [
//     countUniqueValues([1,1,1,1,2]),
//     countUniqueValues([1,1,1,2,3,4,5,6,12]),
//     countUniqueValues([]),
//     countUniqueValues([-2,-1,0,1]),
//   ]
// )



export function maxSubarraySum(arr, n){
  if (n > arr.length) return null;

  let max = 0
  for (let i=0; i<arr.length - n + 1; i++){
    let temp = 0
    for (let j = 0; j<n; j++){
      temp += arr[i+j];
    }
    if(temp > max){
      max = temp;
    }
  }
  return max;
}


// Sliding Window pattern
export function maxSubarraySumRefactor(arr, num){
  let maxSum = 0
  let tempSum = 0
  if (num > arr.length) return null;

  for (let i = 0; i<num; i++){
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i<arr.length; i++){
    tempSum = tempSum - arr[i-num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

// console.log([
//   maxSubarraySumRefactor([1,2,5,2,8,1,5], 2), //10
//   maxSubarraySumRefactor([1,2,5,2,8,1,5], 4), //17
//   maxSubarraySumRefactor([4,2,1,6], 1), //6
//   maxSubarraySumRefactor([4,2,1,6,2], 4), //13
//   maxSubarraySumRefactor([], 4), //null
// ]) 



// divide and conquer
// Time complexity - Log(N) - Binary Search
export function search(arr, val){
  let min = 0;
  let max = arr.length - 1;

  while(min <= max){
    let middle = Math.floor((min+max)/2);
    let curElement = arr[middle];

    if(arr[middle] < val){
      min = middle + 1;
    }
    else if(arr[middle] > val){
      max = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
}

// Sorted arr
// console.log([
//   search([1,2,3,4,5,6], 4), //3
//   search([1,2,3,4,5,6], 6), //5
//   search([1,2,3,4,5,6], 11), //-1
// ])



export function sameFrequency(num1, num2){
  if(num1.length !== num2.length) return false;

  let str1 = '' + num1;
  let str2 = '' + num2;

  let lookup = {};
  for ( let i = 0; i < str1.length; i++){
    let letter = str1[i];
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }

  for(let i = 0; i < str2.length; i++){
    let letter = str2[i];

    if(!lookup[letter]){
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

// console.log([
//   sameFrequency(182, 281), // true
//   sameFrequency(34, 24), // false
//   sameFrequency(345612, 123456), // true
//   sameFrequency(22, 222), // false
// ])



// Muttiple pointers pattern
// Restrictions:
// Time - O(n)
// Space - O(n)
// Bosnus
// Time - O(n log n) | Space - O(n)
export function areThereDuplicates(){
  let temp = {};

  for(let i = 0; i< arguments.length; i++){
    let key = arguments[i];
    
    if(temp[key]) return true 

    temp[key] = 1
  }
  return false;
}
function areThereDuplicatesOneLine() {
  return new Set(arguments).size !== arguments.length;
}
// console.log([
//   areThereDuplicates(1,2,3), // false
//   areThereDuplicates(1,2,2), // true
//   areThereDuplicates('a', 'b', 'c', 'a') // true
// ])




// Multiple pointers - averagePair
// average pair -> there may be more than one pair that matches the average target
function averagePair(arr = [], n){
  if (arr.length === 0) return false;

  let targetSum = n*2;
  let i = 0;
  let j = arr.length - 1;
  for(let a = 0; a< arr.length; a++){
    if(targetSum === (arr[i] + arr[j])) return true;

    if(targetSum > (arr[i] + arr[j])){
      i++;
    } else {
      j--;
    }
  }

  return false;
}

// console.log([
//   averagePair([1,2,3],2.5), //true
//   averagePair([1,3,3,4,5,6,10,12,19], 8), //true
//   averagePair([-1,0,3,4,5,6], 4.1), // false
//   averagePair([],4) //false
// ])



// Multiple Pointers - isSubsequence
function isSubsequence(str1, str2){
  if(str2.includes(str1)) return true;
  // sliding window

  let start = 0;
  let end = str1.length - 1;

  let temp = {};
  for(let i = 0; i < str2.length; i++){
    if (end > str2.length) return false;
    if (start > str2 - str1.)
    if(str1[end] === str2[i]){
      end++
    }

    if(str1[start] === str2[i]){
      start++;
    }
    
  }

  return true;
}

console.log([
  isSubsequence('hello', 'hello world'), //true
  isSubsequence('sing', 'sting'), //true
  isSubsequence('abc', 'abracasdr'), //true
  isSubsequence('abc', 'acb'), //false (order matters)
])