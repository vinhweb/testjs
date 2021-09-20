// O(n^2)
export function validAnagram(str1, str2) {
  let arr1, arr2;
  arr1 = str1.split('');
  arr2 = str2.split('');
  if (arr1.length > 0 && arr2.length > 0) {
      for (let i = 0; i < arr1.length; i++) {
          let temp1, temp2 = [];
          temp1 = arr1.filter(item => item === arr1[i]);
          temp2 = arr2.filter(item => item === arr1[i]);
          if (temp1.length !== temp2.length)
              return false;
      }
      return true;
  }
  else if (arr1.length === 0 && arr2.length === 0) {
      return true;
  }
  else {
      return false;
  }
}

// O(2n)
export function validAnagram2(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }

    const lookup = {};

    for (let i = 0; i < str1.length; i++) {
        let letter = str1[i];

        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for (let i = 0; i < str2.length; i++){
        let letter = str1[i];

        if(!lookup[letter]){
            return false;
        } else {
            lookup[letter] -=1;
        }
    }

    return true;
}

console.log(
    validAnagram2('123qwe','ewq321') + ' => expect true',
    validAnagram2('123qwe','ewq3021') + ' => expect false',
  )