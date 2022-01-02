export function checkPalindrome(inputString: string): boolean {
    const originalWord = inputString.toLocaleLowerCase();
    const reverseWord = originalWord.split('').reverse().join('')
    return originalWord === reverseWord
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));
