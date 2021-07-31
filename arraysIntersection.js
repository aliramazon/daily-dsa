const arraysIntersection = (arr1, arr2) => {
    let larger,
        smaller,
        map = new Map(),
        intersection = [];

    if (arr1.length > arr2.length) {
        [larger, smaller] = [arr1, arr2];
    } else {
        [smallar, larger] = [arr1, arr2];
    }

    for (let ele of larger) {
        if (!map.has(ele)) {
            map.set(ele, true);
        }
    }

    for (let ele of smaller) {
        if (map.has(ele)) {
            intersection.push(ele);
        }
    }

    return intersection;
};
console.log(arraysIntersection([1, 2, 9, 10, 12, 100], [10, 12, 1, 99]));
