function plusOne(digits: number[]): number[] {
    let lastDigits = digits[digits.length - 1];
    for (var i = digits.length - 1 ; i >= 0; i --) {
        if (digits[i] === 9) {
            digits[i] = 0;
            continue;
        }
        else {
            digits[i] ++;
            return digits;
        }
    }
    digits.push(0);
    digits[0] = 1;
    return digits;
};