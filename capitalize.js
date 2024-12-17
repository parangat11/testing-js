export function capitalize(string) {
    let firstChar = string[0];
    console.log(typeof firstChar);
    string = `${firstChar.toUpperCase()}` + string.slice(1);
    return string;
}