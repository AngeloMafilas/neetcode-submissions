class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // check if the anagram is the same length first 
        if(s.length !==t.length){
            return false
        }
        // create a set of zeros that will use 26 
        const seen = new Array(26).fill(0);
        
        //iterate through every single letter and add 1 to s and then minus t === 0
        for(let i =0; i< s.length; i++){
            seen[s.charCodeAt(i) -'a'.charCodeAt(0)] ++;
            seen[t.charCodeAt(i) - 'a'.charCodeAt(0)] --;
        }
        for (let key of seen){
            if(key !== 0){
                return false
            }
        }
        return true
    }
}
