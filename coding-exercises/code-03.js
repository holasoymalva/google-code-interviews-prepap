
// Given two sorted lists of integers, return their union and intersection as lists.
// a: [1, 2, 3]
// b: [3, 4, 5]
// union: [1, 2, 3, 4, 5]
// intersection: [3]

const arrA = [1, 2, 3];
const arrB = [3, 4, 5];
const union = [1, 2, 3, 4, 5];
const intersection = [3];

function findUnionAndIntersection(arrA,arrB){
    const union = [];
    const intersection = [];

    let i = 0;
    let j = 0;

    // O(m+n)

    while (i < arrA.length && j< arrB.length) {
        if (arrA[i] < arrB[j]) {
            union.push(arrA[i]);
            i++;
        } else if (arrA[i]> arrB[j]){
            union.push(arrB[j]);
            j++;
        }else{
            union.push(arrA[i]);
            intersection.push(arrB[j]);
            i++;
            j++;
        }
    }

    while(j < arrB.length){
        union.push(arrB[j]);
        j++;
    }

    return {
        union,
        intersection
    }; 
}

const result = findUnionAndIntersection(arrA,arrB);
console.log("Union: ", result.union);
console.log("Interseccion: ", result.intersection);

console.log("Union Test: ", union);
console.log("Union Test: ", union === result.union);
