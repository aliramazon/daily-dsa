const isSubsetArray = (arr1, arr2) => {
    let largerArr = arr1,
        smallerArr = arr2,
        hash = {};

    if (largerArr.length < smallerArr.length) {
        largerArr = arr2;
        smallerArr = arr1;
    }

    for (let ele of largerArr) {
        hash[ele] ? hash[ele]++ : (hash[ele] = 1);
    }

    for (let ele of smallerArr) {
        if (hash[ele]) {
            hash[ele]--;
        } else {
            return false;
        }
    }

    return true;
};

console.log(isSubsetArray([1, 2, 5, 6], [6, 5, 1])); // true
console.log(isSubsetArray([1, 2, 5, 6], [6, 5, 0])); // false
console.log(isSubsetArray([1, 1, 2, 5, 6], [6, 5, 1])); // true
console.log(isSubsetArray([1, 1, 2, 5, 6], [6, 5, 1, 1])); // true
console.log(isSubsetArray([1, 1, 2, 5, 6], [6, 5, 1, 2, 2])); // false
