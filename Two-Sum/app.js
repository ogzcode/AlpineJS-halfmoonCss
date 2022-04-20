//Sıralanmamış bir tamsayı dizisi verildiğinde, içinde verilen toplamı olan bir çift bulun
//Given an unsorted integer array, find a pair with the given sum in it
/* 
Input:
 
nums = [8, 7, 2, 5, 3, 1]
target = 10
 
Output:
 
Pair found (8, 2)
or
Pair found (7, 3)
 
 
Input:
 
nums = [5, 2, 6, 8, 1, 9]
target = 12
 
Output: Pair not found
*/

function printConsole(array){
    if (array.length == 0){
        console.log("Pair not found");
        return;
    }

    for(let sum of array){
        console.log(`Pair found ${sum}\n`);
    }
}

function printData(array, target, algoType){
    console.log("Algorithm : " + algoType);
    console.log("Numbers : " + array.toString());
    console.log("Target : " + target);
}
function bruteForce(array, target){
    const sumArray = [];
    printData(array, target, "Brute Force");

    for (let i = 0; i < array.length; i++){
        for (let j = i + 1; j < array.length; j++){
            if (array[i] + array[j] == target){
                sumArray.push([array[i], array[j]]);
            }
        }
    }

    return sumArray;
}

function withSorting(array, target){
    printData(array, target, "Using Sort");
    array.sort(function(a,b){return a - b});
    
    let low = 0;
    let high = array.length - 1;
    const sumArray = [];

    while (low < high){
        let sum = array[high] + array[low];

        if (sum < target){
            low++;
        }
        else if (sum > target){
            high--;
        }
        else if (sum == target){
            sumArray.push([array[low], array[high]]);
            low++;
            high--;
        }
    }

    return sumArray;
}


function withHashing(array, target){
    printData(array, target, "Using Hashing");

    const hash = {};
    const sumArray = [];

    for (let i = 0; i < array.length; i++){
        hash[array[i]] = i;
    }

    array.forEach((data, index) => {
        let complement = target - data;
        if ((`${complement}` in hash) && hash[complement] !== index){
            hash[complement] = index;
            sumArray.push([complement, data]);
        }
        hash[data] = index;
    });

    return sumArray;
}

const nums = [8, 7, 2, 5, 3, 1];
let target = 10;

const nums1 = [5, 2, 6, 8, 1, 9];
let target1 = 12;

printConsole(bruteForce(nums, target));
printConsole(bruteForce(nums1, target1));

printConsole(withSorting(nums, target));
printConsole(withSorting(nums1, target1));

printConsole(withHashing(nums, target));
printConsole(withHashing(nums1, target1));

