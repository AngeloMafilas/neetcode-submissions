class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        // create a hashmap to store value → index as we walk through the array
        const prevMap = new Map()

        for(let i = 0; i < nums.length; i++){

            // calculate what number we need to reach the target
            const diff = target - nums[i]

            // check if that number already exists in the map (O(1) lookup)
            if(prevMap.has(diff)){

                // if yes, we found our pair — return both indices
                // prevMap.get(diff) gives us the index of the complement we saw earlier
                return [prevMap.get(diff), i]
            }

            // if not found, store the current value and its index for future lookups
            // key = nums[i] (the value), value = i (the index)
            prevMap.set(nums[i], i)
        }
    }
}