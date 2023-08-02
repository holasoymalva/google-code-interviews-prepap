


//find duplicate numbers in an integer array 
// and output the indexes of the duplicate numbers
//Index 
// n + 1 
//  0 1 2 3 4 5 6 7 8 9 10
// (2,5,2,7,8,2,7,8,9,10, 8)

//Output: 
// 2: 0, 2, 5
// 7: 3,6
// 8: 7,10

let input = [2,5,2,7,8,2,7,8,9,10,8];
let output = "[2: 0, 2, 5],[7: 3,6],[8: 7,10]";

function findDuplicateIndexes(arr){
    const duplicateIndexes = {};
    let i = 0;
    // O(n)
    for (i ; i < arr.length; i++) {
        const num = arr[i];

        if(!duplicateIndexes.hasOwnProperty(num)){
            duplicateIndexes[num] = [i];
        }else{
            duplicateIndexes[num].push(i);
        }
    }

    return duplicateIndexes;
}

const result =  findDuplicateIndexes(input);
console.log(result);


// 



//find duplicate numbers in an integer array 
// and output the indexes of the duplicate numbers
//Index 
// n + 1 
//  0 1 2 3 4 5 6 7 8 9 10
// (2,5,2,7,8,2,7,8,9,10, 8)

// //Output: 
// // 2: 0, 2, 5
// // 7: 3,6
// // 8: 7,10

// function duplicateElement(array, element){
//     let index = [];
//     let value = array.indexOf(element);

//     while (value != -1) {
//         index.push(value);
//         value = array.indexOf(element, value+1);
//     }
//     return index;
// }

// function duplicateArray(arr){
// //     h + m 
//     let arr2 = new Set(arr);
//     let arrDuplicates = [];

//     arr2.forEach( function (value){
//         let index = duplicateElement(arr,value);
//         if (index.length > 1) {
//             arrDuplicates.push(`[ ${value} : ${index} ] `);
//         }
//     });
//     return arrDuplicates;
// }
// //  O = O(h+m*n)
// // let indexTravel = [2,5,2,7,8,2,7,8,9,10,8]; // Change values
// // indexTravel = ['a','b','a','b','b'] // Test
// //indexTravel = ['😸','👩🏽‍💻','👁','👩🏽‍💻','👁','👩🏽‍💻','😸','👩🏽‍💻'] // Test
// // indexTravel = ['a',3,'a','b',3,'b'] // Test

// let indexTravel = indexTravel = ['😸',3,'😸','👁',3,'👁','b','b']; // Test

// let duplicates = duplicateArray(indexTravel);

// let headLine = document.getElementById("mainHeading");
// headLine.innerHTML += duplicates;