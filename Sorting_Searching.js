/* 

First Task :
You are asked to write an algorithm that fulfills the following: 

Name: Dot product
Description:
Write a function, called dot_product which calculates in the variable ps, the dot(scalar) product of v1 and v2 (v1 and v2 are vectors of IR)
Write an algorithm which determines, for n pairs of given vectors, whether two vectors of given IR are orthogonal, by calling the procedure defined in the previous question. The dot product of two orthogonal vectors is zero.

*/


function dot_product(v1, v2) {
    let ps = 0;

    for (let i = 0; i < v1.length; i++) {
        ps = ps + (v1[i] * v2[i]);
        
    }

    return ps;
}

function orthogonal_check(vec1, vec2) {
    if (dot_product(vec1, vec2) === 0) {
        return ("Vectors [" + vec1 + "] and [" + vec2 + "] are orthogonal");
    } else {
        return ("Vectors [" + vec1 + "] and [" + vec2 + "] are not orthogonal")
    }

}


// console.log(orthogonal_check([1,2,3,-2], [5,6,7,19]));







/* 
Second Task:
Insertion sort is a simple sorting algorithm that works the way we sort playing cards in our hands. Each time we take a new card we put it in the right place in our hand.

- Each time work only with the first i-1 element from of the array
- Pick element arr[i] and insert it into sorted sequence in the array from 0 to i-1.

*/

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        // let temp = array[j];
        // array[j] = array[j - 1];
        // array[j-1] = temp;
        [array[j], array[j-1]] = [array[j-1], array[j]];
      }else {break;}
    }
  }

  return array;
}

// console.log(insertionSort([1,4,67,232,11,235,235,5,3,2,4,6,7]))