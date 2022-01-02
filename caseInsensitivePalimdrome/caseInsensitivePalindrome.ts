export function isCaseInsensitivePalindrome(inputString: string): boolean {
    const lowerCaseWord= inputString.toLowerCase();
    const reverseWord = lowerCaseWord.split('').reverse().join('');

    return reverseWord === lowerCaseWord;
}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));