/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    r isValid = function(s) {
   
    let stack = [];

   
    const matchingBrackets = {
        ')': '(',
        '}': '{',
        ']': '['
    
};

         for (let char of s) {
        
        if (char in matchingBrackets) {
          
            let topElement = stack.length ? stack.pop() : '#';
            
           
            if (topElement !== matchingBrackets[char]) {
                return false;
            }
        } else {
  
            stack.push(char);
        }
    }

 
    return stack.length === 0;
};
module.exports = { isValid };


