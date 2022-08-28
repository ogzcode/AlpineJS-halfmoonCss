/*
-Verilen ikili diziyi doğrusal zaman ve sabit uzayda yerinde sıralayın

Input : [1, 0, 1, 0, 1, 0, 0, 1]
Output: [0, 0, 0, 0, 1, 1, 1, 1]

Input : [1, 1]
Output: [1, 1]
 */

function sortBinaryArray(array){
    let zeroCount = 0;
    for (let data of array){
        if (data == 0){
            zeroCount++;
        }
    }

    for (let i = 0; i < zeroCount; i++){
        array[i] = 0;
    }

    for (let i = zeroCount; i < array.length; i++){
        array[i] = 1;
    }

    console.log(array.toString());
}

const input = [1,0,1,0,1,0,0,1];
const input1 = [1,1];
sortBinaryArray(input);
sortBinaryArray(input1);