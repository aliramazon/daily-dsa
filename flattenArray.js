const flattenArray = (nestedArrays) => {
    let flattenedArr = [];

    for (let ele of nestedArrays) {
        if (!Array.isArray(ele)) {
            flattenedArr.push(ele);
        } else {
            flattenedArr.push(...flattenArray(ele));
        }
    }
    return flattenedArr;
};

console.log(flattenArray([1, 2, 3, [2, 3, [4, 5, [6, 7, 8, 9, [10, [11]]]]]]));
