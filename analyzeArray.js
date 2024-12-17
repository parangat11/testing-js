const MAX_VALUE = 1000000, MIN_VALUE = -1000000;

export function analyzeArray(arr) {
    const obj = {
        average: arr.reduce((addition, item) => item + addition, 0) / arr.length,
        min: arr.reduce((min, item) => {
            if(min >= item) return item;
            return min;
        }, MAX_VALUE),
        max: arr.reduce((max, item) => {
            if(max <= item) return item;
            return max;
        }, MIN_VALUE),
        length: arr.length,
    }
    return obj;
}