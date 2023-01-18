function twoSum(nums, target) {
    for (var i = 0; i < nums.length - 1; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            console.log(nums[i] + " " + nums[j]);
            console.log();
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}
console.log(twoSum([2, 7, 11, 15], 9));
