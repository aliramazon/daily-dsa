const duplicatesInArray = (arr) => {
    let duplicates = [],
        hash = {};

    for (let ele of arr) {
        if (!hash[ele]) {
            hash[ele] = 1;
        } else {
            if (hash[ele] === 1) {
                duplicates.push(ele);
            }

            hash[ele]++;
        }
    }

    return duplicates;
};

console.log(duplicatesInArray([1, 5, 3, 5, 67, 67, 100, 1, 4, 5, 67, 67]));
