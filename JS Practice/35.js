var searchInsert = function(nums, target) {
    for (let i=0; i< nums.length; i++){
        if (nums[i]===target || nums[i]>target){
            console.log(nums[i]);
        }
    }
    console.log(nums.length+1);
};