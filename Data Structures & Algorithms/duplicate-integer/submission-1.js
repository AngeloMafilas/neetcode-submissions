class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */

    hasDuplicate(nums) {
        //if we sort the array first and then iterate over it 
        nums.sort((a,b) => a-b);
        //first we will create the hash set 
        const duplicates = new Set()
        //iterate over the whole set 
        for(let num of nums){
            if(duplicates.has(num)){
                return true
            }
            //add the numbers to the set 
            duplicates.add(num)
        }
        return false
    }
}
