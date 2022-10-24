
/*  Task 1

Write an algorithm that read a sentence, which ends with a point,, character by character to determine:

The number of words in the sentence (assuming that the words are separated by a single space).
The number of vowels in the sentence.
You have to keep in mind that:

Each character will be treated separately.

The last character is the point.

Use three variables as counters. 

*/



var sentence = prompt("enter a sentence");

sentence = sentence.toLowerCase();
var s = sentence.split('');

i = s.length-2;
var j = 0;
var word = 0;
var vowel = 0;


while (j <= i) {
    if (s[j] === ' ') {
        word = word + 1;
    }
    if (s[j] === 'a' || s[j] === 'e' || s[j] === 'i' || s[j] === 'o' || s[j] === 'u' ) {
        vowel = vowel + 1;
        j++;
    }else{j++;}

    
}

word = word + 1;

console.log(word + "," + vowel);





/*

Task 2

Description:

Given two sets of elements, find the sum of all distinct elements from the set. In other words, find the sum of all elements which are present in either of the given set.
Example:
Set 1 : [3, 1, 7, 9], Set 2: [2, 4, 1, 9, 3]
Output: 13 (distinct elements 4, 7, 2 )
Use an array as a method.
Initialize sum = 0. Compare each element of set one with the second set and if element is not present then add that element to sum. Then do the vice versa to add elements from the second set.

*/






// var arr1 = [3, 1, 7, 9]  ;
// var arr2 = [2, 4, 1, 9, 3];

function uniqueSum(arr1, arr2) {
    


    var j = 0;
    var m = 0;
    var x = 0
    var sum = 0;

    while (j < arr1.length) {
        
        for (i=0; i < arr2.length; i++) {
            if (arr1[j] == arr2[i]) {
                x = x+1;
            } 
        }
        
        if (x == 0) {
            sum = sum + arr1[j];
        }
        
        x = 0;
        i = 0;

        j++;
        
    }

    while (m < arr2.length) {
        
        for (n=0; n < arr1.length; n++) {
            if (arr2[m]  ==  arr1[n]) {
                x = x + 1;
            }
        }
        
        if (x == 0) {
            sum = sum + arr2[m];
        }
        x=0;
        n=0;
        m++;
    }

    alert(sum);

}
