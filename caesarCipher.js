export function caesarCipher(string, rotation) {
    rotation = rotation % 26;
    const obj1 = {}, obj2 = {};
    let ans = "";
    const str = "abcdefghijklmnopqrstuvwxyz";
    for(let i = 0; i < 26; i++) {
        obj1[i] = str[i];
        obj2[str[i]] = i;
    }
    for(let i = 0; i < string.length; i++) {
        if(obj2[(string[i].toLowerCase())] === undefined){
            ans += string[i];
            continue;
        }
        if(string[i] === string[i].toUpperCase()) {
            let pos = parseInt(obj2[(string[i].toLowerCase())]);
            pos = rotation + pos;
            pos %= 26;
            let ch = obj1[pos];
            console.log(ch);
            ans += ch.toUpperCase();
        }
        else {
            let pos = obj2[string[i]];
            pos = rotation + pos;
            pos %= 26;
            ans += obj1[pos];
        }
    }
    return ans;
}

console.log(caesarCipher("HeLLo", 3));