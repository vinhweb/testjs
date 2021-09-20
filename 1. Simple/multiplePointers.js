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

console.log([
  maxSubarraySumRefactor([1,2,5,2,8,1,5], 2), //10
  maxSubarraySumRefactor([1,2,5,2,8,1,5], 4), //17
  maxSubarraySumRefactor([4,2,1,6], 1), //6
  maxSubarraySumRefactor([4,2,1,6,2], 4), //13
  maxSubarraySumRefactor([], 4), //null
])