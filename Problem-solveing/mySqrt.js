function mySqrt(x) {
    if (x < 2) return x;

    let left = 1, right = x >> 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let sq = mid * mid;

        if (sq === x) {
            return mid;
        } else if (sq < x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return right;
}

console.log(mySqrt(4)); // Output: 2
console.log(mySqrt(8)); // Output: 2
console.log(mySqrt(0)); // Output: 0
console.log(mySqrt(1)); // Output: 1
console.log(mySqrt(9)); // Output: 3
