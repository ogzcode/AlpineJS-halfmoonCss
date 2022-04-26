/*
Bir tamsayı dizisi verildiğinde, içindeki maksimum ürüne sahip bir çift bulun.

Her girdinin birden fazla çözümü olabilir. Çıktı bunlardan biriyle eşleşmelidir.

Given an integer array, find a pair with the maximum product in it.

Each input can have multiple solutions. The output should match with either one of them.

Input : [-10, -3, 5, 6, -2]
Output: (-10, -3) or (-3, -10) or (5, 6) or (6, 5)

Input : [-4, 3, 2, 7, -5]
Output: (3, 7) or (7, 3)

If no pair exists, the solution should return an empty tuple.

Input : [1]
Output: ()

*/

function findMaximumProduct(array) {
    array.sort(function (a, b) { return a - b });
    const resultList = [];

    let resultMin = 0;

    if (array[0] < 0 && array[1] < 0) {
        resultMin = array[0] * array[1];
        resultList.push([array[0], array[1]]);
        resultList.push([array[1], array[0]]);
    }

    let resultMax = array[array.length - 1] * array[array.length - 2];
    resultList.push([array[array.length - 1], array[array.length - 2]]);
    resultList.push([array[array.length - 2], array[array.length - 1]]);

    if (resultMax > resultMin) {
        resultList.pop();
        resultList.pop();
    }
    else if (resultMax < resultMin) {
        resultList.shift();
        resultList.shift();
    }

    for (let data of resultList) {
        console.log(data.toString());
    }
}

const input = [-10, -3, 5, 6, -2];
const input1 = [-4, 3, 2, 7, -5];
findMaximumProduct(input);
findMaximumProduct(input1);
