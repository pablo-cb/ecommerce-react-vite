/*

Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]

Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned k (hence they are underscores).

*/

/* MY SOLUTION */

var removeElement = function(nums, val) {
    let k = nums.length; // counter
    for (let i=0; i < nums.length; i++){
        if (nums[i] === val){
            nums[i] = "_";
            k--;
        }
    }
    nums.sort((a, b) => {
        if (a === "_"){
            return 1;
        }
        if (b === "_") {
            return -1;
        }
        return a - b;
    });
    return k;
};


// Chat GPT

function removeElement(nums, val) {
    let k = 0; // counter for non-val elements
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== val) { // current element is not val
        nums[k] = nums[i]; // move it to the front
        k++; // increment counter
        console.log(nums);
      }
    }
    return k;
}

removeElement([0,1,2,2,3,0,4,2], 2);


/*

Explanation:

We initialize a counter k to zero, which will keep track of the number of non-val elements in the array.

We loop through the array using a for loop and a variable i that goes from 0 to nums.length - 1.

For each element at index i, we check if it is not equal to val using nums[i] !== val.
If the element is not val, we move it to the front of the array by assigning it to nums[k] and incrementing k.

If the element is val, we do nothing and continue to the next element.

After the loop, the first k elements of the array contain the non-val elements in their original order.

We return k, which is the number of non-val elements in the array.

This solution modifies the input array in-place and uses only O(1) extra memory. The relative order of the elements may be changed, but the first k elements of the array contain the non-val elements in their original order.

*/