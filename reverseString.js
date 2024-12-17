export function reverseString(string) {
    let ans = "";
    for(let i = 0; i < string.length; i++) {
        ans += string[string.length-i-1];
    }
    return ans;
}